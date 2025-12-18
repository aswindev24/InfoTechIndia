import { COMPANY_DETAILS } from '../constants/companyInfo';

export const openWhatsApp = (message) => {
    const defaultMessage = "Hi Info Tech India, I need a final year project for MCA/BCA/BSc CS.";
    const msg = message || defaultMessage;
    const url = `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
};
