import { withTrailingSlash } from 'ufo'

export const getBreadCrumbs = async() => {

    // find the route using useRoute
    const route = useRoute()   

    // information in the current page like ._path and title
   

    // current path
    const currentpath = route.path

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

    // create extract titles and the path and create an array of promises

    let titleDirectory = []

    const promises = await Promise.all(directory.map( (path) => queryContent(path).only(['_path','title']).findOne()))

    console.log(promises)


    //return
    return promises

   
}