import React, { ReactNode } from 'react'
import {CardBoxComponentBody} from "@components/cardboxcomponentbody"
import {CardBoxComponentFooter} from "@components/cardboxcomponentfooter"

type Props = {
  rounded?: string
  flex?: string
  className?: string
  hasComponentLayout?: boolean
  hasTable?: boolean
  isHoverable?: boolean
  isModal?: boolean
  children: ReactNode
  footer?: ReactNode
  onClick?: (e: React.MouseEvent) => void
}

export default function CardBox({
  rounded = 'rounded-2xl',
  flex = 'flex-col',
  className = '',
  hasComponentLayout = false,
  hasTable = false,
  isHoverable = false,
  isModal = false,
  children,
  footer,
  onClick,
}: Props) {
  const componentClass = [
    'bg-white flex',
    className,
    rounded,
    flex,
   isModal ? 'dark:bg-slate-300' : 'dark:bg-slate-900/70',
  ]

  if (isHoverable) {
    componentClass.push('hover:shadow-lg transition-shadow duration-500')
  }

  return (
    <div className={componentClass.join(' ')} onClick={onClick}>
    {hasComponentLayout ? (
    children
    ) : (
    <>
    <CardBoxComponentBody noPadding={hasTable}>{children}</CardBoxComponentBody>
    {footer && <CardBoxComponentFooter>{footer}</CardBoxComponentFooter>}
    </>
    )}
    </div>
    );
}
