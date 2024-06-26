import type { Schema, Attribute } from '@strapi/strapi';

export interface AromaAroma extends Schema.Component {
  collectionName: 'components_aroma_aromas';
  info: {
    displayName: 'Aroma';
    description: '';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface CapacityCapacity extends Schema.Component {
  collectionName: 'components_capacity_capacities';
  info: {
    displayName: 'Capacity';
    icon: 'database';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    price: Attribute.Float;
  };
}

export interface ContactContact extends Schema.Component {
  collectionName: 'components_contact_contacts';
  info: {
    displayName: 'contact';
    icon: 'pencil';
  };
  attributes: {
    info: Attribute.String;
  };
}

export interface ManualManual extends Schema.Component {
  collectionName: 'components_manual_manuals';
  info: {
    displayName: 'manual';
    icon: 'file';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
  };
}

export interface ProductManualProductManual extends Schema.Component {
  collectionName: 'components_product_manual_product_manuals';
  info: {
    displayName: 'Product Manual';
    icon: 'slideshow';
    description: '';
  };
  attributes: {
    textManual: Attribute.Blocks;
    mediaManual: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SocialSocial extends Schema.Component {
  collectionName: 'components_social_socials';
  info: {
    displayName: 'social';
    icon: 'earth';
    description: '';
  };
  attributes: {
    imageSocial: Attribute.Media<'images'>;
    url: Attribute.String;
    title: Attribute.String;
  };
}

export interface SubNavbarSubNavbar extends Schema.Component {
  collectionName: 'components_sub_navbar_sub_navbars';
  info: {
    displayName: 'Sub Navbar';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    item: Attribute.String;
    des: Attribute.Text;
    url: Attribute.String;
    image: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'aroma.aroma': AromaAroma;
      'capacity.capacity': CapacityCapacity;
      'contact.contact': ContactContact;
      'manual.manual': ManualManual;
      'product-manual.product-manual': ProductManualProductManual;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'social.social': SocialSocial;
      'sub-navbar.sub-navbar': SubNavbarSubNavbar;
    }
  }
}
