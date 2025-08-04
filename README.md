# ResumeGenie

ResumeGenie is an intelligent resume analysis and feedback platform that helps job seekers optimize their resumes for better performance in Applicant Tracking Systems (ATS) and overall presentation.

## Features

### 🔍 Resume Analysis
- **ATS Score Evaluation**: Get detailed scoring on how well your resume performs with Applicant Tracking Systems
- **Comprehensive Feedback**: Receive insights on tone & style, content quality, structure, and skills presentation
- **Visual Score Gauges**: Interactive score displays with color-coded feedback

### 📁 Resume Management
- **Drag & Drop Upload**: Easy file upload with visual feedback
- **PDF Processing**: Automatic conversion of PDF resumes to images for analysis
- **Resume Gallery**: Track multiple resumes and their performance scores
- **Secure Storage**: Files stored securely using Puter cloud storage

### 📊 Detailed Reporting
- **Category Breakdown**: Scores for different aspects of your resume
- **Actionable Tips**: Specific suggestions for improvement
- **Interactive Interface**: Collapsible sections for detailed feedback
- **Progress Tracking**: Monitor improvements across multiple submissions

## Tech Stack

- **Frontend**: React 19 with React Router 7
- **Styling**: Tailwind CSS with custom animations
- **PDF Processing**: PDF.js for document handling
- **State Management**: Zustand
- **File Storage**: Puter SDK for cloud storage
- **Build Tool**: Vite
- **TypeScript**: Full type safety

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ResumeGenie
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
ResumeGenie/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── ATS.tsx         # ATS score display
│   │   ├── Details.tsx     # Detailed feedback sections
│   │   ├── FileUploader.tsx # Drag & drop file upload
│   │   ├── Navbar.tsx      # Navigation component
│   │   ├── ResumeCard.tsx  # Resume preview cards
│   │   ├── ScoreGauge.tsx  # Circular score visualization
│   │   └── Summary.tsx     # Score summary component
│   ├── lib/                # Utility functions and hooks
│   │   ├── puter.ts        # Puter SDK integration
│   │   ├── pdf2img.ts      # PDF to image conversion
│   │   └── utils.ts        # General utilities
│   ├── routes/             # Application routes
│   │   ├── auth.tsx        # Authentication page
│   │   ├── home.tsx        # Dashboard/home page
│   │   ├── resume.tsx      # Resume analysis view
│   │   └── upload.tsx      # Resume upload page
│   ├── app.css            # Global styles
│   └── root.tsx           # Application root
├── constants/             # Application constants
├── public/               # Static assets
└── package.json
```

## Key Components

### File Upload
The application supports drag-and-drop file uploads with visual feedback. Supported formats include PDF files, which are automatically processed and converted to images for display.

### Resume Analysis
Each uploaded resume is analyzed across multiple dimensions:
- **ATS Compatibility**: How well the resume works with automated screening systems
- **Content Quality**: Relevance and impact of resume content
- **Structure**: Organization and formatting effectiveness  
- **Skills Presentation**: How well technical and soft skills are showcased

### Score Visualization
Multiple visualization components provide clear feedback:
- Circular progress gauges for overall scores
- Color-coded badges for quick status recognition
- Detailed breakdown charts for category-specific feedback

## Authentication

The application uses Puter's authentication system to provide secure user accounts and resume storage. Users must sign in to upload and track their resumes.

## Storage

All resume data and files are stored using Puter's cloud storage system, providing:
- Secure file storage
- Cross-device access
- Reliable data persistence

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run typecheck` - Run TypeScript type checking

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Support

If you encounter any issues or have questions, please open an issue in the repository.
