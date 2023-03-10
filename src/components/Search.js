import React, { useEffect, useState } from 'react';

/**
 * Don't touch these imports!
 */
import { 
  fetchAllCenturies,
  fetchAllClassifications,
  fetchQueryResults
} from '../api';

const Search = (props) => {
  // the props we passed in is setIsLoading and setSearchResults
  // remember props is an object
  // console.log("in Search component")
  // console.log(props) -> {setIsLoading: ƒ, setSearchResults: ƒ}

  // Make sure to destructure setIsLoading and setSearchResults from the props

  // props.setIsLoading(...)
  // we are matching the name when deconstructing
  const { setIsLoading, setSearchResults  } = props

  // we can now do setIsLoading()

  /**
   * We are at the Search component, a child of app. This has a form, so we need to use useState for
   * our controlled inputs:
   * 
   * centuryList, setCenturyList (default should be an empty array, [])
   * classificationList, setClassificationList (default should be an empty array, [])
   * queryString, setQueryString (default should be an empty string, '')
   * century, setCentury (default should be the string 'any')
   * classification, setClassification (default should be the string 'any')
   */

   const [centuryList, setCenturyList] = useState([])
   const [classificationList, setClassificationList] = useState([])
   const [queryString, setQueryString] = useState("")
   const [century, setCentury] = useState("any")
   const [classification, setClassification] = useState("any")



  /**
   * Inside of useEffect, use Promise.all([]) with fetchAllCenturies and fetchAllClassifications
   * 
   * In the .then() callback pass the returned lists to setCenturyList and setClassificationList
   * 
   * Make sure to console.error on caught errors from the API methods.
   */
  useEffect(() => {
    // fetchAllCenturies()
    // fetchAllClassifications()

    Promise.all([fetchAllCenturies(), fetchAllClassifications()])
    .then(([centuries, classifications]) => {
      setCenturyList(centuries)
      setClassificationList(classifications)
    })
    .catch(console.error)


  }, []);

  /**
   * This is a form element, so we need to bind an onSubmit handler to it which:
   * 
   * calls event.preventDefault()
   * calls setIsLoading, set it to true
   * 
   * then, in a try/catch/finally block:
   * 
   * try to:
   * - get the results from fetchQueryResults({ century, classification, queryString })
   * HINT: Look at your state
   * - pass them to setSearchResults
   * 
   * catch: error to console.error
   * 
   * finally: call setIsLoading, set it to false
   */


  return ( <form id="search" onSubmit={async (event) => {
    event.preventDefault()
    setIsLoading(true)

    try {
      const results = await fetchQueryResults( { century, classification, queryString})
      setSearchResults(results)
    } catch (error){
      console.error()
    } finally {
      setIsLoading(false)
    }
  }}>
    <fieldset>
      <label htmlFor="keywords">Query</label>
      <input 
        id="keywords" 
        type="text" 
        placeholder="enter keywords..." 
        value={queryString} 
        onChange={event => setQueryString(event.target.value)}/>
    </fieldset>
    <fieldset>
      <label htmlFor="select-classification">Classification <span className="classification-count">({ classificationList.length })</span></label>
      <select 
        name="classification"
        id="select-classification"
        value={classification} 
        onChange={event => setClassification(event.target.value)}>
        <option value="any">Any</option>
        {
              //   {
              //     "objectcount": 5623,
              //     "id": 30,
              //     "lastupdate": "2015-11-22T03:17:45-0500",
              //     "name": "Sculpture",
              //     "classificationid": 30
              // }
        classificationList.map((classification, idx) => {
             return <option key={`${idx}:${classification.name}`} value={classification.name}>{classification.name}</option>
            // <option value="Sculpture">Sculpture</option>
          })
        }
      </select>
    </fieldset>
    <fieldset>
      <label htmlFor="select-century">Century <span className="century-count">({ centuryList.length })</span></label>
      <select 
        name="century" 
        id="select-century"
        value={century} 
        onChange={event => setCentury(event.target.value)}>
        <option value="any">Any</option>
        {/* map over the centuryList, return an <option /> */
               centuryList.map((century, idx) => {
                return <option key={`${idx}:${century.name}`} value={century.name}>{century.name}</option>
               // <option value="Sculpture">Sculpture</option>
             })
              
              //   {
              //     "id": 37525374,
              //     "objectcount": 28,
              //     "lastupdate": "2015-11-22T03:17:52-0500",
              //     "temporalorder": 3,
              //     "name": "6th millennium BCE"
              // }
        }
      </select>
     </fieldset>
    <button>SEARCH</button>
  </form>
)}

export default Search;