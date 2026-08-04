import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface PageHeaderProps {
    title: string
    description?: string
    section?: string
    buttonText?: string
    buttonUrl?: string
    buttonIcon?: React.ReactNode
    buttonVariant?: "blue" | "yellow" | "red" | "purple" | "inverse" | "secondary" | "default"
    buttonNote?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({
    title,
    description,
    section,
    buttonText,
    buttonUrl,
    buttonIcon,
    buttonVariant = "yellow", // Default to "yellow" if none is provided
    buttonNote,
}) => {
    const showButton = buttonText && buttonUrl

    return (
        <section className="w-full justify-start">
            <div className="flex flex-col gap-3 w-full pt-10 pb-10 border-y-1 border-white/50">
                {section && (
                    <div className="text-xs uppercase text-potus w-full">
                        {section}/
                    </div>
                )}
                <div className="flex flex-col sm:flex-row gap-8 lg:gap-0 items-start justify-between w-full">
                    <div className="flex flex-col gap-5 w-full">
                        <div className="text-4xl lg:text-3xl uppercase text-white w-full">
                            {title}
                        </div>
                        {showButton && (
                            <div className="flex flex-col gap-1.5">
                                <Link
                                    href={buttonUrl}
                                    passHref
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    download
                                >
                                    <Button variant={buttonVariant}>
                                        {buttonIcon || <Download size={20} />} {buttonText}
                                    </Button>
                                </Link>
                                {buttonNote && (
                                    <span className="text-xs text-white/50">{buttonNote}</span>
                                )}
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col sm:items-end gap-2 w-full sm:w-2/3">
                        {description && (
                            <p className="text-base text-white/70 leading-relaxed text-justify">{description}</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageHeader
