// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Homepage documents */
interface HomepageDocumentData {
    /**
     * Title field in *Homepage*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Slice Zone field in *Homepage*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<HomepageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Homepage → Slice Zone*
 *
 */
type HomepageDocumentDataSlicesSlice = HeroSliceSlice | ProjectsSlice | AnimationSlice | WhatIOfferSlice | ResourcesSlice | FooterSlice;
/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<HomepageDocumentData>, "homepage", Lang>;
/** Content for Navigation documents */
interface NavigationDocumentData {
    /**
     * Name field in *Navigation*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Name of the navigation list
     * - **API ID Path**: navigation.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    name: prismicT.RichTextField;
    /**
     * Slice Zone field in *Navigation*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<NavigationDocumentDataSlicesSlice>;
}
/**
 * Slice for *Navigation → Slice Zone*
 *
 */
type NavigationDocumentDataSlicesSlice = NavigationItemSlice;
/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<NavigationDocumentData>, "navigation", Lang>;
/** Content for Page documents */
interface PageDocumentData {
    /**
     * Title field in *Page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: page.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Slice Zone field in *Page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<PageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice = OtherPagesSlice | FieldsSlice | FooterSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
export type AllDocumentTypes = HomepageDocument | NavigationDocument | PageDocument;
/**
 * Primary content in Animation → Primary
 *
 */
interface AnimationSliceDefaultPrimary {
    /**
     * Title field in *Animation → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: animation.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *Animation → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: animation.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Default variation for Animation Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Animation`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type AnimationSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<AnimationSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Animation*
 *
 */
type AnimationSliceVariation = AnimationSliceDefault;
/**
 * Animation Shared Slice
 *
 * - **API ID**: `animation`
 * - **Description**: `Animation`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type AnimationSlice = prismicT.SharedSlice<"animation", AnimationSliceVariation>;
/**
 * Primary content in Fields → Primary
 *
 */
interface FieldsSliceDefaultPrimary {
    /**
     * Title Page field in *Fields → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: fields.primary.title_page
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title_page: prismicT.TitleField;
    /**
     * Description field in *Fields → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: fields.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Default variation for Fields Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Fields`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FieldsSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<FieldsSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Fields*
 *
 */
type FieldsSliceVariation = FieldsSliceDefault;
/**
 * Fields Shared Slice
 *
 * - **API ID**: `fields`
 * - **Description**: `Fields`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FieldsSlice = prismicT.SharedSlice<"fields", FieldsSliceVariation>;
/**
 * Primary content in Footer → Primary
 *
 */
interface FooterSliceDefaultPrimary {
    /**
     * Title CTA  field in *Footer → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: footer.primary.title_cta
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title_cta: prismicT.RichTextField;
    /**
     * CTA Text field in *Footer → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: footer.primary.cta_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    cta_text: prismicT.KeyTextField;
    /**
     * CTA Link field in *Footer → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: footer.primary.cta_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    cta_link: prismicT.LinkField;
}
/**
 * Item in Footer → Items
 *
 */
export interface FooterSliceDefaultItem {
    /**
     * Socials Text field in *Footer → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: footer.items[].socials_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    socials_text: prismicT.KeyTextField;
    /**
     * Social Links field in *Footer → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: footer.items[].social_links
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    social_links: prismicT.LinkField;
}
/**
 * Default variation for Footer Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Footer`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FooterSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<FooterSliceDefaultPrimary>, Simplify<FooterSliceDefaultItem>>;
/**
 * Slice variation for *Footer*
 *
 */
type FooterSliceVariation = FooterSliceDefault;
/**
 * Footer Shared Slice
 *
 * - **API ID**: `footer`
 * - **Description**: `Footer`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FooterSlice = prismicT.SharedSlice<"footer", FooterSliceVariation>;
/**
 * Primary content in HeroSlice → Primary
 *
 */
interface HeroSliceSliceDefaultPrimary {
    /**
     * Title field in *HeroSlice → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: hero_slice.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *HeroSlice → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: hero_slice.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Image field in *HeroSlice → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: hero_slice.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Item in HeroSlice → Items
 *
 */
export interface HeroSliceSliceDefaultItem {
    /**
     * CTA Link field in *HeroSlice → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: hero_slice.items[].cta
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    cta: prismicT.LinkField;
    /**
     * CTA Text field in *HeroSlice → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero_slice.items[].cta_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    cta_text: prismicT.KeyTextField;
}
/**
 * Default variation for HeroSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: `HeroSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSliceSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<HeroSliceSliceDefaultPrimary>, Simplify<HeroSliceSliceDefaultItem>>;
/**
 * Slice variation for *HeroSlice*
 *
 */
type HeroSliceSliceVariation = HeroSliceSliceDefault;
/**
 * HeroSlice Shared Slice
 *
 * - **API ID**: `hero_slice`
 * - **Description**: `HeroSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSliceSlice = prismicT.SharedSlice<"hero_slice", HeroSliceSliceVariation>;
/**
 * Primary content in NavigationItem → Primary
 *
 */
interface NavigationItemSliceDefaultPrimary {
    /**
     * Name field in *NavigationItem → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Name of the link
     * - **API ID Path**: navigation_item.primary.name
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    name: prismicT.RichTextField;
    /**
     * Link field in *NavigationItem → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: Link for the item
     * - **API ID Path**: navigation_item.primary.link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
    /**
     * Contact  Btn field in *NavigationItem → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: Contact button
     * - **API ID Path**: navigation_item.primary.Contact_Button
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    Contact_Button: prismicT.KeyTextField;
    /**
     * Contact Link field in *NavigationItem → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: Contact link
     * - **API ID Path**: navigation_item.primary.contact_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    contact_link: prismicT.LinkField;
    /**
     * Logo field in *NavigationItem → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation_item.primary.logo
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    logo: prismicT.ImageField<never>;
    /**
     * Logo Link field in *NavigationItem → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation_item.primary.logo_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    logo_link: prismicT.LinkField;
}
/**
 * Default variation for NavigationItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: `NavigationItem`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NavigationItemSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<NavigationItemSliceDefaultPrimary>, never>;
/**
 * Slice variation for *NavigationItem*
 *
 */
type NavigationItemSliceVariation = NavigationItemSliceDefault;
/**
 * NavigationItem Shared Slice
 *
 * - **API ID**: `navigation_item`
 * - **Description**: `NavigationItem`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NavigationItemSlice = prismicT.SharedSlice<"navigation_item", NavigationItemSliceVariation>;
/**
 * Primary content in OtherPages → Primary
 *
 */
interface OtherPagesSliceDefaultPrimary {
    /**
     * Title field in *OtherPages → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: other_pages.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *OtherPages → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: other_pages.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Profile Picture field in *OtherPages → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: other_pages.primary.profile_picture
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    profile_picture: prismicT.ImageField<never>;
    /**
     * Bg Cover field in *OtherPages → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: other_pages.primary.bg_cover
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    bg_cover: prismicT.ImageField<never>;
}
/**
 * Item in OtherPages → Items
 *
 */
export interface OtherPagesSliceDefaultItem {
    /**
     * Numbers field in *OtherPages → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: other_pages.items[].numbers
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    numbers: prismicT.KeyTextField;
    /**
     * Titles  field in *OtherPages → Items*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Title - things about me
     * - **API ID Path**: other_pages.items[].titles
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    titles: prismicT.TitleField;
    /**
     * Description About me field in *OtherPages → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Description of things about me
     * - **API ID Path**: other_pages.items[].description_about_me
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description_about_me: prismicT.RichTextField;
}
/**
 * Default variation for OtherPages Slice
 *
 * - **API ID**: `default`
 * - **Description**: `OtherPages`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type OtherPagesSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<OtherPagesSliceDefaultPrimary>, Simplify<OtherPagesSliceDefaultItem>>;
/**
 * Slice variation for *OtherPages*
 *
 */
type OtherPagesSliceVariation = OtherPagesSliceDefault;
/**
 * OtherPages Shared Slice
 *
 * - **API ID**: `other_pages`
 * - **Description**: `OtherPages`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type OtherPagesSlice = prismicT.SharedSlice<"other_pages", OtherPagesSliceVariation>;
/**
 * Item in Projects → Items
 *
 */
export interface ProjectsSliceDefaultItem {
    /**
     * Image field in *Projects → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: projects.items[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Default variation for Projects Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Projects`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ProjectsSliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, Simplify<ProjectsSliceDefaultItem>>;
/**
 * Slice variation for *Projects*
 *
 */
type ProjectsSliceVariation = ProjectsSliceDefault;
/**
 * Projects Shared Slice
 *
 * - **API ID**: `projects`
 * - **Description**: `Projects`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ProjectsSlice = prismicT.SharedSlice<"projects", ProjectsSliceVariation>;
/**
 * Primary content in Resources → Primary
 *
 */
interface ResourcesSliceDefaultPrimary {
    /**
     * Title Section field in *Resources → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: resources.primary.title_section
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title_section: prismicT.TitleField;
    /**
     * Sub Header  field in *Resources → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: resources.primary.sub_header
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    sub_header: prismicT.RichTextField;
}
/**
 * Item in Resources → Items
 *
 */
export interface ResourcesSliceDefaultItem {
    /**
     * Resource Images field in *Resources → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: resources.items[].resource_images
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    resource_images: prismicT.ImageField<never>;
    /**
     * Resource Header field in *Resources → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: resources.items[].resource_header
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    resource_header: prismicT.RichTextField;
    /**
     * CTA Link field in *Resources → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: resources.items[].cta_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    cta_link: prismicT.LinkField;
    /**
     * CTA Text field in *Resources → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: resources.items[].cta_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    cta_text: prismicT.RichTextField;
}
/**
 * Default variation for Resources Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Resources`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ResourcesSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ResourcesSliceDefaultPrimary>, Simplify<ResourcesSliceDefaultItem>>;
/**
 * Slice variation for *Resources*
 *
 */
type ResourcesSliceVariation = ResourcesSliceDefault;
/**
 * Resources Shared Slice
 *
 * - **API ID**: `resources`
 * - **Description**: `Resources`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ResourcesSlice = prismicT.SharedSlice<"resources", ResourcesSliceVariation>;
/**
 * Primary content in WhatIOffer → Primary
 *
 */
interface WhatIOfferSliceDefaultPrimary {
    /**
     * Title section field in *WhatIOffer → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: what_i_offer.primary.title_section
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title_section: prismicT.TitleField;
    /**
     * Section Description field in *WhatIOffer → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: what_i_offer.primary.section_description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    section_description: prismicT.RichTextField;
}
/**
 * Item in WhatIOffer → Items
 *
 */
export interface WhatIOfferSliceDefaultItem {
    /**
     * Numbers field in *WhatIOffer → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: what_i_offer.items[].numbers
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    numbers: prismicT.KeyTextField;
    /**
     * Title Points field in *WhatIOffer → Items*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Key Points
     * - **API ID Path**: what_i_offer.items[].title_points
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title_points: prismicT.TitleField;
    /**
     * Desciption field in *WhatIOffer → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: description of key points
     * - **API ID Path**: what_i_offer.items[].key_description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    key_description: prismicT.RichTextField;
}
/**
 * Default variation for WhatIOffer Slice
 *
 * - **API ID**: `default`
 * - **Description**: `WhatIOffer`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type WhatIOfferSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<WhatIOfferSliceDefaultPrimary>, Simplify<WhatIOfferSliceDefaultItem>>;
/**
 * Slice variation for *WhatIOffer*
 *
 */
type WhatIOfferSliceVariation = WhatIOfferSliceDefault;
/**
 * WhatIOffer Shared Slice
 *
 * - **API ID**: `what_i_offer`
 * - **Description**: `WhatIOffer`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type WhatIOfferSlice = prismicT.SharedSlice<"what_i_offer", WhatIOfferSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { HomepageDocumentData, HomepageDocumentDataSlicesSlice, HomepageDocument, NavigationDocumentData, NavigationDocumentDataSlicesSlice, NavigationDocument, PageDocumentData, PageDocumentDataSlicesSlice, PageDocument, AllDocumentTypes, AnimationSliceDefaultPrimary, AnimationSliceDefault, AnimationSliceVariation, AnimationSlice, FieldsSliceDefaultPrimary, FieldsSliceDefault, FieldsSliceVariation, FieldsSlice, FooterSliceDefaultPrimary, FooterSliceDefaultItem, FooterSliceDefault, FooterSliceVariation, FooterSlice, HeroSliceSliceDefaultPrimary, HeroSliceSliceDefaultItem, HeroSliceSliceDefault, HeroSliceSliceVariation, HeroSliceSlice, NavigationItemSliceDefaultPrimary, NavigationItemSliceDefault, NavigationItemSliceVariation, NavigationItemSlice, OtherPagesSliceDefaultPrimary, OtherPagesSliceDefaultItem, OtherPagesSliceDefault, OtherPagesSliceVariation, OtherPagesSlice, ProjectsSliceDefaultItem, ProjectsSliceDefault, ProjectsSliceVariation, ProjectsSlice, ResourcesSliceDefaultPrimary, ResourcesSliceDefaultItem, ResourcesSliceDefault, ResourcesSliceVariation, ResourcesSlice, WhatIOfferSliceDefaultPrimary, WhatIOfferSliceDefaultItem, WhatIOfferSliceDefault, WhatIOfferSliceVariation, WhatIOfferSlice };
    }
}
