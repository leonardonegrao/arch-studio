import Image from 'next/image'
import Link from 'next/link'

import Typography from '../../foundation/Typography'
import Button from '../../common/Button'
import { FeaturedProject, FeaturedProjectsWrapper } from './style'

import imgDelSol from '../../../../public/assets/portfolio/desktop/image-del-sol.jpg'
import img228b from '../../../../public/assets/portfolio/desktop/image-228b.jpg'
import imgPrototype from '../../../../public/assets/portfolio/desktop/image-prototype.jpg'

export default function Featured() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '200px',
          marginBottom: '64px'
        }}
      >
        <Typography variant="heading2" tag="h2" color="veryDarkBlue">Featured</Typography>
        <Button variant="default">See All</Button>
      </div>
      <FeaturedProjectsWrapper>
        <FeaturedProject>
          <div className="number-wrapper" style={{ opacity: 0.5 }}>
            <Typography variant="heading1Large" tag="h2" color="white">1</Typography>
          </div>

          <div className="text-content-wrapper">
            <Typography variant="heading3" tag="h3" color="white">Project Del Sol</Typography>
            <Link href="/portfolio">
              <a>
                <Typography variant="body" tag="a" color="white">View All Projects</Typography>
              </a>
            </Link>
          </div>
          <Image
            src={imgDelSol}
            alt="Image of Project Del Sol"
            layout="fill"
          />
        </FeaturedProject>
        <FeaturedProject>
          <div className="number-wrapper" style={{ opacity: 0.5 }}>
            <Typography variant="heading1Large" tag="h2" color="white">2</Typography>
          </div>

          <div className="text-content-wrapper">
            <Typography variant="heading3" tag="h3" color="white">Project Del Sol</Typography>
            <Link href="/portfolio">
              <a>
                <Typography variant="body" tag="a" color="white">View All Projects</Typography>
              </a>
            </Link>
          </div>
          <Image
            src={img228b}
            alt="Image of Project Del Sol"
            layout="fill"
          />
        </FeaturedProject>
        <FeaturedProject>
          <div className="number-wrapper" style={{ opacity: 0.5 }}>
            <Typography variant="heading1Large" tag="h2" color="white">3</Typography>
          </div>

          <div className="text-content-wrapper">
            <Typography variant="heading3" tag="h3" color="white">Project Del Sol</Typography>
            <Link href="/portfolio">
              <a>
                <Typography variant="body" tag="a" color="white">View All Projects</Typography>
              </a>
            </Link>
          </div>
          <Image
            src={imgPrototype}
            alt="Image of Project Del Sol"
            layout="fill"
          />
        </FeaturedProject>
      </FeaturedProjectsWrapper>
    </>
  )
}