import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children?: string
  size?: 'small' | 'big'
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  size = 'small'
}: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        type="button"
        title={title}
        onClick={onClick}
        size={size}
      >
        {children}
      </ButtonContainer>
    )
  }
  return (
    <ButtonLink to={to as string} size={size}>
      {children || title}
    </ButtonLink>
  )
}

export default Button
