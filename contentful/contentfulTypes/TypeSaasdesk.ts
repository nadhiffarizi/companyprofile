import type { EntryFieldTypes, ChainModifiers, LocaleCode, Entry, EntrySkeletonType } from "contentful";

export type TypeSaasdeskFields = {
    contentTypeId: 'saasdesk'
    fields: {
        headline: EntryFieldTypes.Symbol;
        companyheadline: EntryFieldTypes.Symbol;
        description: EntryFieldTypes.Symbol;
        review: EntryFieldTypes.Object;
        benefit: EntryFieldTypes.Object;
        team: EntryFieldTypes.Object;
        pricing: EntryFieldTypes.Object;
    }

}

export type TypeSaasDesk = EntrySkeletonType<TypeSaasdeskFields>;
export type TypeBlogPost<Modifiers extends ChainModifiers,
    Locales extends LocaleCode = LocaleCode> = Entry<TypeSaasDesk, Modifiers, Locales>;