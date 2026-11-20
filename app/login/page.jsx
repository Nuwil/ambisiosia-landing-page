import { redirect } from 'next/navigation';
import { site } from '../../lib/site';

export const metadata = { title: `Login | ${site.name}` };

export default function LoginPage() {
  redirect(site.loginHref);
}
