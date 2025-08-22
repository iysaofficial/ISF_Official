'use client';

import './globals.css';
import HeroComp from "@/components/home/HeroComp"
import AboutComp from "@/components/home/AboutComp"
import CategoryComp from '@/components/home/CategoryComp'
import AfterEventComp from "@/components/home/AfterEventComp"
import NewsComp from '@/components/home/NewsComp'
import NewsletterComp from '@/components/home/NewsletterComp'
import SocialMediaComp from '@/components/home/SocialMediaComp'
import ContactComp from '@/components/home/ContactComp'
import LogoComp from "@/components/home/LogoComp"


export default function HomePage() {
    return(
        <>
        <br />
        <br />
        <br />
        <HeroComp></HeroComp>
        <AboutComp></AboutComp>
        <CategoryComp></CategoryComp>
        <SocialMediaComp></SocialMediaComp>
        {/* <NewsletterComp></NewsletterComp> */}
        {/* <AfterEventComp></AfterEventComp> */}
        {/* <NewsComp></NewsComp> */}
        <ContactComp></ContactComp>
        <LogoComp></LogoComp>  
        </>
    )
}