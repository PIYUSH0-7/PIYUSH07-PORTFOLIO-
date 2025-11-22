import { jsPDF } from 'jspdf';

export const generateResume = (data: any, socials: any[], skills: any[]) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - (margin * 2);
  let y = margin;

  // --- CONFIGURATION ---
  const COLORS = {
    PRIMARY: '#18181b',    // Zinc-900
    SECONDARY: '#52525b',  // Zinc-600
    ACCENT: '#7c3aed',     // Purple-600
    LIGHT: '#a1a1aa',      // Zinc-400
    BG_TAG: '#f4f4f5',     // Zinc-100
    BORDER: '#e4e4e7'      // Zinc-200
  };

  const FONTS = {
    H1: { size: 24, style: 'bold' },
    H2: { size: 14, style: 'bold' },
    H3: { size: 12, style: 'bold' },
    BODY: { size: 10, style: 'normal' },
    SMALL: { size: 9, style: 'normal' },
    TINY: { size: 8, style: 'normal' }
  };

  // --- HELPERS ---
  
  // Check if we need a new page
  const checkPageBreak = (heightNeeded: number) => {
    if (y + heightNeeded > pageHeight - margin - 10) { // -10 for footer buffer
      addFooter();
      doc.addPage();
      y = margin;
      return true;
    }
    return false;
  };

  const addFooter = () => {
    const totalPages = doc.getNumberOfPages();
    const currentY = pageHeight - 10;
    doc.setFontSize(FONTS.TINY.size);
    doc.setTextColor(COLORS.LIGHT);
    doc.text(`Page ${totalPages} • Generated from piyush07.vercel.app`, pageWidth / 2, currentY, { align: 'center' });
    doc.link(margin, currentY - 3, pageWidth - margin*2, 10, { url: 'https://piyush07.vercel.app' });
  };

  const drawDivider = () => {
    doc.setDrawColor(COLORS.BORDER);
    doc.setLineWidth(0.5);
    doc.line(margin, y, pageWidth - margin, y);
    y += 8;
  };

  const addSectionTitle = (title: string) => {
    checkPageBreak(15);
    doc.setFontSize(FONTS.H2.size);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(COLORS.ACCENT);
    doc.text(title.toUpperCase(), margin, y);
    y += 2;
    doc.setDrawColor(COLORS.ACCENT);
    doc.setLineWidth(1);
    doc.line(margin, y, margin + 20, y); // Short underline accent
    y += 10;
  };

  const wrapText = (text: string, width: number) => {
    return doc.splitTextToSize(text, width);
  };

  // --- CONTENT GENERATION ---

  // 1. HEADER
  // 1. HEADER: Name and Role
  doc.setFontSize(FONTS.H1.size);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(COLORS.PRIMARY);
  doc.text(data.profile.name, margin, y);
  y += 8;

  doc.setFontSize(FONTS.H3.size);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(COLORS.ACCENT);
  doc.text(data.profile.role, margin, y);
  y += 10;

  // 2. CONTACT GRID
  doc.setFontSize(FONTS.SMALL.size);
  doc.setTextColor(COLORS.SECONDARY);

  // Define columns
  const col1X = margin;
  // Assuming 'pageWidth' is defined globally, otherwise use: doc.internal.pageSize.getWidth()
  const col2X = (pageWidth / 2) + 10; 
  
  // Row 1: Location & Email
  doc.text(`Loc: ${data.profile.location}`, col1X, y);
  doc.text(`Email: ${data.profile.email}`, col2X, y);
  y += 5;

  // Row 2: Phone & GitHub
  doc.text(`Ph: ${data.profile.phone}`, col1X, y);
  
  // Check if URL exists to prevent errors, defaulting to the text string if no URL provided
  doc.textWithLink(`Github: github.com/PIYUSH0-7`, col2X, y, { 
    url: data.profile.url || "https://github.com/PIYUSH0-7" 
  });
  y += 5;

  // Row 3: Portfolio & LinkedIn
  doc.textWithLink(`Web: piyush07.vercel.app`, col1X, y, { 
    url: "https://piyush07.vercel.app" 
  });
  
  doc.textWithLink(`LinkedIn: /in/piyush070`, col2X, y, { 
    url: "https://www.linkedin.com/in/piyush070/" 
  });
  y += 10;

  drawDivider();
  // 2. ABOUT
  addSectionTitle("Professional Profile");
  doc.setFontSize(FONTS.BODY.size);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(COLORS.SECONDARY);
  const aboutLines = wrapText(data.profile.about, contentWidth);
  doc.text(aboutLines, margin, y);
  y += (aboutLines.length * 5) + 5;

  // 3. SKILLS
  checkPageBreak(30);
  addSectionTitle("Technical Expertise");
  const skillGap = 2;
  const skillHeight = 7;
  let skillX = margin;
  
  doc.setFontSize(FONTS.SMALL.size);
  
  skills.forEach(skill => {
    const textWidth = doc.getTextWidth(skill.name) + 6;
    if (skillX + textWidth > pageWidth - margin) {
      skillX = margin;
      y += skillHeight + 2;
    }
    
    // Draw chip background
    doc.setFillColor(COLORS.BG_TAG);
    doc.setDrawColor(COLORS.BORDER);
    doc.roundedRect(skillX, y - 5, textWidth, skillHeight, 2, 2, 'FD');
    
    // Draw text
    doc.setTextColor(COLORS.PRIMARY);
    doc.text(skill.name, skillX + 3, y);
    
    skillX += textWidth + skillGap;
  });
  y += 12;

  // 4. EXPERIENCE (Timeline Style)
  if (data.experience && data.experience.length > 0) {
    checkPageBreak(20);
    addSectionTitle("Experience & Learning Path");
    
    data.experience.forEach((exp: any) => {
        // Estimate height
        // Title + Role + Desc
        const descText = exp.description || ""; // Fallback logic handled below
        
        // Find extended description from Projects if possible
        const linkedProject = data.projects.find((p: any) => p.id === exp.id);
        const fullDesc = linkedProject ? linkedProject.description : descText;
        
        const descLines = wrapText(fullDesc, contentWidth - 10);
        const itemHeight = 15 + (descLines.length * 5);
        
        checkPageBreak(itemHeight);

        // Timeline Line
        doc.setDrawColor(COLORS.BORDER);
        doc.setLineWidth(0.5);
        doc.line(margin + 2, y + 2, margin + 2, y + itemHeight - 2);
        
        // Timeline Dot
        doc.setFillColor(COLORS.ACCENT);
        doc.circle(margin + 2, y + 2, 1.5, 'F');

        // Content
        const contentX = margin + 10;
        
        // Title & Date
        doc.setFontSize(FONTS.H3.size);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(COLORS.PRIMARY);
        doc.text(exp.company, contentX, y + 2);
        
        const dateWidth = doc.getTextWidth(exp.period);
        doc.setFontSize(FONTS.SMALL.size);
        doc.setTextColor(COLORS.SECONDARY);
        doc.text(exp.period, pageWidth - margin - dateWidth, y + 2);
        
        y += 6;
        
        // Role
        doc.setFontSize(FONTS.BODY.size);
        doc.setFont('helvetica', 'italic');
        doc.setTextColor(COLORS.ACCENT);
        doc.text(exp.role, contentX, y);
        y += 5;
        
        // Description
        doc.setFontSize(FONTS.SMALL.size);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(COLORS.SECONDARY);
        doc.text(descLines, contentX, y);
        
        y += (descLines.length * 5) + 6;
    });
  }

  // 5. PROJECTS
  if (data.projects && data.projects.length > 0) {
    checkPageBreak(20);
    addSectionTitle("Key Projects & Development");

    data.projects.forEach((proj: any) => {
       const descLines = wrapText(proj.description, contentWidth);
       const techHeight = 5; 
       const itemHeight = 15 + (descLines.length * 5) + techHeight;

       checkPageBreak(itemHeight);

       doc.setFontSize(FONTS.H3.size);
       doc.setFont('helvetica', 'bold');
       doc.setTextColor(COLORS.PRIMARY);
       doc.text(proj.title, margin, y);

       const dateWidth = doc.getTextWidth(proj.period);
       doc.setFontSize(FONTS.SMALL.size);
       doc.setTextColor(COLORS.SECONDARY);
       doc.text(proj.period, pageWidth - margin - dateWidth, y);
       y += 5;

       doc.setFontSize(FONTS.SMALL.size);
       doc.setFont('helvetica', 'normal');
       doc.text(descLines, margin, y);
       y += (descLines.length * 5) + 2;
       
       // Tech stack
       if (proj.tech && proj.tech.length > 0) {
          doc.setFont('helvetica', 'bold');
          doc.setTextColor(COLORS.ACCENT);
          const techStr = `Stack: ${proj.tech.join(" • ")}`;
          doc.text(techStr, margin, y);
          y += 5;
       }
       
       // Link
       if (proj.source) {
          doc.setFontSize(FONTS.TINY.size);
          doc.setTextColor(COLORS.LIGHT);
          doc.textWithLink("View Source Code", margin, y, { url: proj.source });
          y += 8;
       } else {
         y += 4;
       }
    });
  }

  // 6. EDUCATION
  if (data.education) {
    checkPageBreak(20);
    addSectionTitle("Education");
    
    data.education.forEach((edu: any) => {
       checkPageBreak(15);
       
       doc.setFontSize(FONTS.H3.size);
       doc.setFont('helvetica', 'bold');
       doc.setTextColor(COLORS.PRIMARY);
       doc.text(edu.institution, margin, y);
       
       const dateWidth = doc.getTextWidth(edu.period);
       doc.setFontSize(FONTS.SMALL.size);
       doc.setTextColor(COLORS.SECONDARY);
       doc.text(edu.period, pageWidth - margin - dateWidth, y);
       y += 5;
       
       doc.setFontSize(FONTS.BODY.size);
       doc.setFont('helvetica', 'italic');
       doc.setTextColor(COLORS.SECONDARY);
       doc.text(edu.program, margin, y);
       y += 8;
    });
  }

  // 7. HACKATHONS / CREATIONS
  if (data.hackathons && data.hackathons.length > 0) {
      checkPageBreak(20);
      addSectionTitle("Hackathons & Innovations");
      
      data.hackathons.forEach((hack: any) => {
          const descLines = wrapText(hack.description, contentWidth);
          checkPageBreak(15 + (descLines.length*5));
          
          doc.setFontSize(FONTS.BODY.size);
          doc.setFont('helvetica', 'bold');
          doc.setTextColor(COLORS.PRIMARY);
          doc.text(hack.title, margin, y);
          
          doc.setFontSize(FONTS.TINY.size);
          doc.setTextColor(COLORS.LIGHT);
          const dateWidth = doc.getTextWidth(hack.date);
          doc.text(hack.date, pageWidth - margin - dateWidth, y);
          y += 4;
          
          doc.setFontSize(FONTS.SMALL.size);
          doc.setFont('helvetica', 'normal');
          doc.setTextColor(COLORS.SECONDARY);
          doc.text(descLines, margin, y);
          y += (descLines.length * 5) + 6;
      });
  }

  // Add footer to last page
  addFooter();

  // Save
  doc.save(`Piyush_Gangwar_Portfolio_CV.pdf`);
};