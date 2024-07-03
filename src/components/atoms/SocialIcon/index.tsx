import { ReactNode } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const getSocialIcon = (type: string): ReactNode => {
  switch (type) {
    case 'whatsapp':
      return <WhatsAppIcon />
    case 'instagram':
      return <InstagramIcon />
    case 'phone':
      return <PhoneIcon />
    case 'email':
      return <EmailIcon />
    case 'linkedin':
      return <LinkedInIcon />
    default:
      return <></>
  }
}

export default getSocialIcon
