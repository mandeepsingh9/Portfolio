import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
  href?: string;
}

function ContactItem({ icon, text, href }: ContactItemProps) {
  const Component = href ? 'a' : 'div';
  return (
    <Component
      href={href}
      className={`flex items-center gap-2 px-4 py-1 ${href ? 'hover:scale-105' : ''} transition-transform duration-200`}
    >
      <span className="text-blue-600 dark:text-blue-400">{icon}</span>
      <span className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
        {text}
      </span>
    </Component>
  );
}

export function ContactInfo() {
  return (
    <div className="flex flex-col items-center gap-0">
      <ContactItem
        icon={<Phone className="w-5 h-5" />}
        text="+91 6299892429"
        href="tel:+916299892429"
      />
      <ContactItem
        icon={<Mail className="w-5 h-5" />}
        text="minturajmdb1999@gmail.com"
        href="minturajmdb1999@gmail.com"
      />
      <ContactItem
        icon={<MapPin className="w-5 h-5" />}
        text="Madhubani Bihar, India"
      />
    </div>
  );
}
