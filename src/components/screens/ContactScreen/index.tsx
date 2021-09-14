
import { StyledContactScreen, StyledContactDetails, MapWrapper, FormWrapper } from './style';

import Button from '@components/common/Button';
import Hero from '@components/common/Hero';
import ArrowIcon from '@components/common/icons/ArrowIcon';
import Image from '@components/common/Image';
import Input from '@components/common/Input';
import TextArea from '@components/common/TextArea';
import Typography from '@components/foundation/Typography';

import { useForm } from '@infra/hooks/useForm';

import HeroImg from '@public/assets/contact/image-hero.jpg';
import MapImg from '@public/assets/contact/image-map.png';

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export default function ContactScreen() {
  const form = useForm<ContactFormValues>({
    initialValues: { name: '', email: '', message: '' },
    onSubmit: () => {},
  });

  return (
    <StyledContactScreen>
      <Hero
        heroTitle="Contact"
        heroImg={HeroImg}
      >
        <Typography variant="heading1Small" color="veryDarkBlue" tag="h1">
            Tell us about your project
        </Typography>

        <Typography variant="body" color="darkGrey" tag="p">
          We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!
        </Typography>
      </Hero>

      <StyledContactDetails>
        <Typography variant="heading1Small" color="veryDarkBlue" tag="h1">
          Contact Details
        </Typography>

        <div className="office">
          <div className="office__content">
            <Typography
              variant="body"
              color="darkGrey"
              tag="h2"
              className="office__title"
            >
            Main Office
            </Typography>

            <Typography
              variant="body"
              color="darkGrey"
            >
            Mail : archone@mail.com
            </Typography>
            <Typography
              variant="body"
              color="darkGrey"
            >
            Address :	1892  Chenoweth Drive TN
            </Typography>
            <Typography
              variant="body"
              color="darkGrey"
            >
            Phone :	123-456-3451
            </Typography>
          </div>

          <div className="office__link">
            <a
              href="https://www.google.com/maps/place/Tennessee,+EUA/@35.8096734,-88.2220069,7z/data=!3m1!4b1!4m5!3m4!1s0x88614b239e97cf03:0x33e20c1a5819156!8m2!3d35.5174913!4d-86.5804473"
              target="_blank" 
              rel="noreferrer">
              <div>
              View on Map <ArrowIcon color="#1b1d23" />
              </div>
            </a>
          </div>
        </div>

        <div className="office">
          <div className="office__content">
            <Typography
              variant="body"
              color="darkGrey"
              tag="h2"
              className="office__title"
            >
            Office II
            </Typography>

            <Typography
              variant="body"
              color="darkGrey"
            >
            Mail : archtwo@mail.com
            </Typography>
            <Typography
              variant="body"
              color="darkGrey"
            >
            Address :	3399  Wines Lane TX
            </Typography>
            <Typography
              variant="body"
              color="darkGrey"
            >
            Phone :	832-123-4321
            </Typography>
          </div>

          <div className="office__link">
            <a
              href="https://www.google.com/maps/place/Texas,+EUA/@31.0909052,-104.5695447,6z/data=!3m1!4b1!4m5!3m4!1s0x864070360b823249:0x16eb1c8f1808de3c!8m2!3d31.9685988!4d-99.9018131"
              target="_blank" 
              rel="noreferrer">
              <div>
              View on Map <ArrowIcon color="#1b1d23" />
              </div>
            </a>
          </div>
        </div>
      </StyledContactDetails>

      <MapWrapper>
        <Image
          src={MapImg}
          responsiveWidth={{
            sm: '100%',
            md: '572px',
            lg: '1110px',
          }}
          responsiveHeight={{
            sm: '367px',
            md: '560px',
            lg: '560px',
          }}
        />
      </MapWrapper>

      <FormWrapper>
        <Typography variant="heading1Small" color="veryDarkBlue" tag="h1">
          Connect with us
        </Typography>

        <form onSubmit={form.handleSubmit}>
          <Input
            placeholder="Name"
            aria-label="Name"
            name="name"
            value={form.values.name}
            onChange={form.handleChange}
          />

          <Input
            placeholder="Email"
            aria-label="Email"
            type="email"
            name="email"
            value={form.values.email}
            onChange={form.handleChange}
          />

          <div>
            <TextArea
              placeholder="Message"
              aria-label="Message"
              name="message"
              value={form.values.message}
              onChange={form.handleChange}
            />
            <Button variant="square" className="submit-button"></Button>
          </div>
        </form>
      </FormWrapper>
    </StyledContactScreen>
  );
}
