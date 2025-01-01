'use client';

import { NavItemWithChildren } from '@/models/config/site';
import { Accordion, AccordionItem } from '@nextui-org/accordion';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/dropdown';
import { link as linkStyles } from '@nextui-org/theme';
import clsx from 'clsx';
import NextLink from 'next/link';
type Props = {
  item: NavItemWithChildren;
};

export const Submenu = ({ item }: Props) => {
  const itemClasses = {
    base: 'py-0 w-full bg-transparent',
    trigger: 'p-0 bg-transparent rounded-lg flex items-center justify-start gap-2 text-[18px] uppercase',
    content: 'p-0 bg-transparent',
  };
  return (
    <div>
      <Dropdown key={item.label} className='hidden lg:flex'>
        <DropdownTrigger className={clsx(linkStyles({ color: 'foreground' }), 'hidden  lg:flex cursor-pointer data-[active=true]:text-primary uppercase')} color='foreground'>
          {item.label}
        </DropdownTrigger>
        <DropdownMenu aria-label='Link Actions'>
          {item?.children?.map((child: any) => (
            <DropdownItem key={child.label}>
              <NextLink href={child.href} className='uppercase'>
                {child.label}
              </NextLink>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>

      <Accordion className='lg:hidden flex p-0 w-full  shadow-none bg-transparent' itemClasses={itemClasses} showDivider={false} variant='shadow'>
        <AccordionItem key='1' aria-label='Connected devices' title={item.label} className='uppercase'>
          <ul className='flex flex-col gap-8 pl-2 my-8 text-[16px]'>
            {item.children.map((child: any) => (
              <NextLink key={child.label} href={child.href}>
                {child.label}
              </NextLink>
            ))}
          </ul>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
