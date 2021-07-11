import styled from 'styled-components'
import Button from '../components/common/Button'

const HomeMain = styled.main`
  .carousel-background {
    width: 1110px;
    height: 720px;
    mix-blend-mode: normal;
    background: #000000;
    opacity: 0.35;
  }
`

export default function Home() {
  return (
    <HomeMain>
      <img
        src="/assets/home/desktop/image-hero-paramour.jpg"
        className="carousel-background"
      />
    </HomeMain>
  )
}
