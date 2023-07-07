import React from "react";

type props = {
  children: React.ReactNode,
  className?: string,
  bgColor?: string
}

export default function Container({ className, bgColor, children }: props) {
  return (
    <section className={`${bgColor}`} >
      <div className={`${className} container mx-auto `}>
        {children}
      </div>
    </section>
  )
}
