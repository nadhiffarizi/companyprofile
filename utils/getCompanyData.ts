import contentfulClient from "../contentful/contentfulClient";
import { TypeSaasdeskFields } from "../contentful/contentfulTypes";
const getCompanyData = async () => {

    try {
        const data = await contentfulClient.getEntries<TypeSaasdeskFields>({
            content_type: "saasdesk",
        });

        // console.log("data in getAllBlogs", data)
        return data


    } catch (error) {
        console.log("Error in fetching company data", error)
    }
}

export default getCompanyData;