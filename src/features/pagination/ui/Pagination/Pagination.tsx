import { IPaginationProps } from '../model/types'
import { PaginationButtons } from '../PaginationButtons/PaginationButtons'

type Props = {
  children: React.ReactNode
  top?: boolean
  bottom?: boolean
}

export function Pagination({
  top,
  bottom,
  children,
  ...paginationProps
}: Props & IPaginationProps) {
  return (
    <>
      {top && <PaginationButtons {...paginationProps} />}
      {children}
      {bottom && <PaginationButtons {...paginationProps} />}
    </>
  )
}
