import React from "react"

interface LogosGridProps {
  logos: string[]
}

export default function LogosGrid({ logos }: LogosGridProps) {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-6">
      <h4 className="text-sm text-white/80 uppercase mb-3">Partners & supporting organisations</h4>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 items-center">
        {logos.map((src, i) => (
          <div key={i} className="flex items-center justify-center p-2 bg-white/2 rounded">
            <img src={src} alt={`logo ${i + 1}`} className="max-h-10 object-contain" />
          </div>
        ))}
      </div>
    </div>
  )
}
