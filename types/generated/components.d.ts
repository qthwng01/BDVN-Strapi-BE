import type { Schema, Attribute } from '@strapi/strapi';

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

export interface DataItemsDataItems extends Schema.Component {
  collectionName: 'components_data_items_data_items';
  info: {
    displayName: 'dataItems';
    icon: 'bulletList';
  };
  attributes: {
    products: Attribute.Relation<
      'data-items.data-items',
      'oneToMany',
      'api::products.products'
    >;
  };
}

export interface DataRankDataRank extends Schema.Component {
  collectionName: 'components_data_rank_data_ranks';
  info: {
    displayName: 'DataRank';
    icon: 'database';
  };
  attributes: {};
}

export interface DmdDataDmdData extends Schema.Component {
  collectionName: 'components_dmd_data_dmd_data';
  info: {
    displayName: 'DMD Data';
    icon: 'bulletList';
  };
  attributes: {
    cc: Attribute.JSON;
  };
}

export interface FaqsFaq extends Schema.Component {
  collectionName: 'components_faqs_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'file';
    description: '';
  };
  attributes: {
    qs: Attribute.String;
    ans: Attribute.Text;
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
    des: Attribute.Text;
    url: Attribute.String;
    subItem: Attribute.String;
  };
}

export interface TagsTags extends Schema.Component {
  collectionName: 'components_tags_tags';
  info: {
    displayName: 'tags';
    icon: 'brush';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'contact.contact': ContactContact;
      'data-items.data-items': DataItemsDataItems;
      'data-rank.data-rank': DataRankDataRank;
      'dmd-data.dmd-data': DmdDataDmdData;
      'faqs.faq': FaqsFaq;
      'manual.manual': ManualManual;
      'product-manual.product-manual': ProductManualProductManual;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'social.social': SocialSocial;
      'sub-navbar.sub-navbar': SubNavbarSubNavbar;
      'tags.tags': TagsTags;
    }
  }
}
