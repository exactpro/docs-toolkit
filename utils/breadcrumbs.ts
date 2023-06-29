
export const getBreadCrumbs = async() => {

    const route = useRoute() 

    const currentpage = await queryContent(route.path).findOne()

    console.log(currentpage)  // -> features/directory1/directory

    const parentpages = currentpage._path?.split('/') // returns an array

    console.log(parentpages)
   
    return currentpage // array
}