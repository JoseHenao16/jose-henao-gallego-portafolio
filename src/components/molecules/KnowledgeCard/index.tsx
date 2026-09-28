import { ReactNode } from 'react'

type KnowledgeCardProps = {
  icon: ReactNode
  title: string
  caption: string
}

const KnowledgeCard = ({ icon, title, caption }: KnowledgeCardProps) => {
  return (
    <div className="flex h-auto min-h-[225px] w-full max-w-[310px] flex-col items-center justify-start bg-[var(--color-fondo)] px-4 pt-6">
      <div className="w-[68px] h-[68px] mb-6 text-[var(--color-accent)] flex items-center justify-center text-4xl">
        {icon}
      </div>
      <h4 className="text-[18px] leading-[124%] font-medium text-[var(--color-darktext)] mb-1">
        {title}
      </h4>
      <p className="text-[15px] leading-[24px] text-[var(--color-graytext)] capitalize text-center">
        {caption}
      </p>
    </div>
  )
}

export default KnowledgeCard
