
import React from 'react';

export interface Service {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export interface ServiceCategory {
    name: string;
    services: Service[];
}

const CodeBracketIcon: React.FC<{className?: string}> = ({ className = "w-8 h-8" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
    </svg>
);

const BoltIcon: React.FC<{className?: string}> = ({ className = "w-8 h-8" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
);

const BookOpenIcon: React.FC<{className?: string}> = ({ className = "w-8 h-8" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6-2.292m0 0v14.25" />
    </svg>
);

const EyeIcon: React.FC<{className?: string}> = ({ className = "w-8 h-8" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639l4.43-6.118a2.25 2.25 0 013.934 0l4.43 6.118a1.012 1.012 0 010 .639l-4.43 6.118a2.25 2.25 0 01-3.934 0l-4.43-6.118z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const ChatBubbleLeftRightIcon: React.FC<{className?: string}> = ({ className = "w-8 h-8" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.722.534A9.003 9.003 0 0112 15.75c-2.652 0-5.093-.95-7.068-2.572A9.006 9.006 0 013.75 8.511c.884-.284 1.5-1.128 1.5-2.097V4.286c0-1.136.847-2.1 1.98-2.193l3.722-.534A9.003 9.003 0 0112 4.25c2.652 0 5.093.95 7.068 2.572A9.006 9.006 0 0120.25 8.511z" />
    </svg>
);

const LanguageIcon: React.FC<{className?: string}> = ({ className = "w-8 h-8" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C13.18 7.061 14.289 7 15.375 7c1.548 0 3.042.114 4.5.337m-5.833 2.332c.587.233 1.18.441 1.783.639M3.75 12.118c0 .252.015.503.044.752m0 0c.294.755.666 1.469 1.14 2.131M3.75 12.118a48.455 48.455 0 01-.044-.752m0 0c-.294-.755-.666-1.469-1.14-2.131M15.375 9.332c.587-.233 1.18-.441 1.783-.639" />
    </svg>
);

const SpeakerWaveIcon: React.FC<{className?: string}> = ({ className = "w-8 h-8" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
    </svg>
);

const ChartBarSquareIcon: React.FC<{className?: string}> = ({ className = "w-8 h-8" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
    </svg>
);

const PaintBrushIcon: React.FC<{className?: string}> = ({ className = "w-8 h-8" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.47 2.118a2.25 2.25 0 01-2.47-2.118c0-.62.28-1.186.74-1.544a3 3 0 00-1.12-5.786 2.25 2.25 0 01-2.118-2.47 2.25 2.25 0 012.118-2.47c.62 0 1.186.28 1.544.74a3 3 0 005.786-1.12 2.25 2.25 0 012.47-2.118 2.25 2.25 0 012.47 2.118c0 .62-.28 1.186-.74 1.544a3 3 0 001.12 5.786 2.25 2.25 0 012.118 2.47 2.25 2.25 0 01-2.118 2.47c-.62 0-1.186-.28-1.544-.74a3 3 0 00-5.786 1.12A2.25 2.25 0 019.53 16.122z" />
    </svg>
);

export const SERVICE_CATALOG: ServiceCategory[] = [
    {
        name: "Machine Learning & MLOps",
        services: [
            { title: "Turing Studio", description: "Integrated environment for the ML lifecycle, with notebooks, data versioning, and experiment tracking.", icon: <CodeBracketIcon /> },
            { title: "Turing AutoML", description: "No-code/low-code solution for automatically building, training, and tuning ML models.", icon: <BoltIcon /> },
            { title: "Turing Model Garden", description: "A repository of pre-trained models and foundation models that can be easily fine-tuned.", icon: <BookOpenIcon /> }
        ]
    },
    {
        name: "Vision AI",
        services: [
            { title: "Turing Vision", description: "Suite of services for image and video analysis, including object detection, facial recognition, and OCR.", icon: <EyeIcon /> }
        ]
    },
    {
        name: "Language & Speech AI",
        services: [
            { title: "Turing Language", description: "Services for NLP, such as sentiment analysis, entity recognition, and text summarization.", icon: <LanguageIcon /> },
            { title: "Turing Speech", description: "Tools for converting speech-to-text and text-to-speech, supporting multiple languages.", icon: <SpeakerWaveIcon /> },
            { title: "Turing Assistant", description: "Framework for building and deploying intelligent chatbots and virtual assistants.", icon: <ChatBubbleLeftRightIcon /> }
        ]
    },
    {
        name: "Data & Analytics",
        services: [
            { title: "Turing Insights", description: "Discover patterns, anomalies, and predictive insights from large datasets.", icon: <ChartBarSquareIcon /> },
            { title: "Turing Data Prep", description: "A visual data preparation tool to clean, transform, and enrich data for machine learning.", icon: <PaintBrushIcon /> }
        ]
    }
];
