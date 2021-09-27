import './polyfill.js'
import ParsingClient from 'sparql-http-client/ParsingClient.js'

async function main () {
  const client = new ParsingClient({
    endpointUrl: 'https://int.lindas.admin.ch/query',
  });

  const query = `
    PREFIX cube: <https://cube.link/>
    PREFIX sh: <http://www.w3.org/ns/shacl#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX blv: <https://environment.ld.admin.ch/foen/animal-pest/>
    PREFIX schema: <http://schema.org/>
    PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
    PREFIX app: <https://www.infosm.blv.admin.ch/>


    SELECT DISTINCT ?option ?value
    WHERE {
      {
        {
          SELECT ?observationSet
          WHERE {
            BIND (<https://environment.ld.admin.ch/foen/animal-pest> as ?cube)
            ?cube <https://cube.link/observationSet> ?observationSet .
          } LIMIT 1
        }
        ?observationSet <https://cube.link/observation> ?observation .
        ?observation <http://schema.org/containedInPlace> ?option .
        ?option <http://schema.org/name> ?value .

      }
    } ORDER BY ?value #LIMIT 802
  `


  try {
    const res = await client.query.select(query)

    console.log(res.length)
  } catch (err) {
    console.error(err)
  }
}

main()
