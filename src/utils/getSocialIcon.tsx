import { ReactNode } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

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
    default:
      return <></>
  }
}

export default getSocialIcon
