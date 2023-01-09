import { useNavigate } from 'react-router-dom'
import { HeaderContainer, HeaderItem } from './header.styles'

function Header() {
  const navigate = useNavigate()

  const handleUseStateClick = () => navigate('/useState')
  const handleUseEffectClick = () => navigate('/useEffect')
  const handleUseRefClick = () => navigate('/useRef')
  const handleUseReducerClick = () => navigate('/useReducer')
  const handleUseMemoClick = () => navigate('/useMemo')
  const handleUseCallbackClick = () => navigate('/useCallback')

  return (
    <HeaderContainer>
      <HeaderItem onClick={handleUseStateClick}>UseState</HeaderItem>
      <HeaderItem onClick={handleUseEffectClick}>UseEffect</HeaderItem>
      <HeaderItem onClick={handleUseRefClick}>UseRef</HeaderItem>
      <HeaderItem onClick={handleUseReducerClick}>UseReducer</HeaderItem>
      <HeaderItem onClick={handleUseMemoClick}>UseMemo</HeaderItem>
      <HeaderItem onClick={handleUseCallbackClick}>UseCallback</HeaderItem>
      <HeaderItem>UselayoutEffect</HeaderItem>
    </HeaderContainer>
  )
}

export default Header
