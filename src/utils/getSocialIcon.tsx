import { ReactNode } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BusinessIcon from '@mui/icons-material/Business';

const getSocialIcon = (type: string, style: any): ReactNode => {
  switch (type) {
    case 'whatsapp':
      return <WhatsAppIcon style={style} />
    case 'instagram':
      return <InstagramIcon style={style} />
    case 'phone':
      return <PhoneIcon style={style} />
    case 'email':
      return <EmailIcon style={style} />
    case 'linkedin':
      return <LinkedInIcon style={style} />
    case 'business':
      return <BusinessIcon style={style} />
    default:
      return <></>
  }
}

export default getSocialIcon
