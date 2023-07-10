import { withTrailingSlash } from 'ufo'

export const getBreadCrumbs = async() => {

    // find the route using useRoute
    const route = useRoute()   

    // information in the current page like ._path and title
    const currentpage = await queryContent(route.path).findOne()

    // cuurent page title
    // const pagetitle = currentpage.title

    // current path
    const currentpath = currentpage._path

    //split the path into sections using split which returns an array
    const splitpath = currentpath.split('/')

    // find the length of the array 
    const splitpathLength = splitpath?.length

    // assign the home directory
    let home = '/'

    // create a directory object 
    let directory = [home]

    // create an array of paths
    let w = home

    for(let i=1; i < splitpathLength; i++) {

        w = withTrailingSlash( w + splitpath[i])

        directory.push(w)

    }

    // TODO: find the title for each constructed path 


    // console.logs 
    console.log(directory)

    console.log(currentpath)

    console.log(splitpath)


    //return
    return currentpath

   
}