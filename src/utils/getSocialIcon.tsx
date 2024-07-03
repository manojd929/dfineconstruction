import { ReactNode } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

const getSocialIcon = (type: string, id?: string): ReactNode => {
  switch (type) {
    case 'whatsapp':
      return <WhatsAppIcon className={id} />
    case 'instagram':
      return <InstagramIcon className={id} />
    case 'phone':
      return <PhoneIcon className={id} />
    case 'email':
      return <EmailIcon className={id} />
    case 'linkedin':
      return <></>
    default:
      return <></>
  }
}

export default getSocialIcon
