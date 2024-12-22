import { NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Navbar as NextUINavbar } from '@nextui-org/navbar';
import { link as linkStyles } from '@nextui-org/theme';
import clsx from 'clsx';
import NextLink from 'next/link';

import { Logo } from '@/components/icons';
import { FlickrIcon } from '@/components/icons/FlickrIcon.icon';
import { GmailIcon } from '@/components/icons/Gmail.icon';
import { LinkdinIcon } from '@/components/icons/Linkedin.icon';
import { ThemeSwitch } from '@/components/theme-switch';
import { siteConfig } from '@/config/site';
import { NavItemWithChildren } from '@/models/config/site';
import { Submenu } from './Submenu/Submenu.component';

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth='xl' position='sticky' height={120}>
      <NavbarContent className='basis-1/5 sm:basis-full' justify='start'>
        <NavbarBrand as='li' className='gap-3 max-w-fit'>
          <NextLink className='flex justify-start items-center gap-1' href='/'>
            <Logo />
            <p className='font-bold text-inherit'>PP_</p>
          </NextLink>
        </NavbarBrand>
        <ul className='hidden lg:flex gap-4 justify-start ml-2'>
          {siteConfig.navItems.map((item) =>
            !item?.children?.length ? (
              <NavbarItem key={item.label}>
                <NextLink className={clsx(linkStyles({ color: 'foreground' }), 'data-[active=true]:text-primary data-[active=true]:font-medium')} color='foreground' href={item.href}>
                  {item.label}
                </NextLink>
              </NavbarItem>
            ) : (
              <Submenu item={item as NavItemWithChildren} key={item.label} />
            )
          )}
        </ul>
      </NavbarContent>

      <NavbarContent className='lg:hidden basis-1 pl-4' justify='end'>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className='mx-4 mt-2 flex flex-col gap-6'>
          {siteConfig.navItems.map((item) =>
            !item?.children?.length ? (
              <NavbarMenuItem key={item.label}>
                <NextLink className={clsx(linkStyles({ color: 'foreground' }), 'text-[18px] data-[active=true]:text-primary data-[active=true]:font-medium')} color='foreground' href={item.href}>
                  {item.label}
                </NextLink>
              </NavbarMenuItem>
            ) : (
              <Submenu item={item as NavItemWithChildren} key={item.label} />
            )
          )}
        </div>
      </NavbarMenu>
      <NavbarContent className='hidden lg:flex basis-1 pl-4' justify='end'>
        <ThemeSwitch />
        <LinkdinIcon size={24} className='text-default-500' />
        <FlickrIcon size={24} className='text-default-500' />
        <GmailIcon size={24} className='text-default-500' />
      </NavbarContent>
    </NextUINavbar>
  );
};
