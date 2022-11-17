<script lang="ts">
    import DataTable from '@smui/data-table'
	import Body from '@smui/data-table/src/Body.svelte';
	import Cell from '@smui/data-table/src/Cell.svelte';
	import Head from '@smui/data-table/src/Head.svelte';
	import Row from '@smui/data-table/src/Row.svelte';
    import axios from 'axios'

    const BASE_URL = 'http://www.sfu.ca/bin/wcm/course-outlines?'

    interface CoursesApiPathVariables {
        year?: number,
        term?: string,
        department?: string,
        courseNumber?: string,
        courseSection?: string
    }

    function buildUrl({year, term, department, courseNumber, courseSection}: CoursesApiPathVariables): string {
        let next = true
        return BASE_URL + [year?.toString(), term, department, courseNumber, courseSection].filter(item => !item ? next = false : true).join('/')
    }

    interface GenericResponse {
        text: string,
        value: string,
        title: string
    }

    let cmptCourses: GenericResponse[] = []

    let pathVars: CoursesApiPathVariables = {
        year: 2023,
        term: 'spring',
        department: 'cmpt'
    }
    
    let url = buildUrl(pathVars)
    axios.get<GenericResponse[]>(url).then(response => cmptCourses = response.data)
</script>

<h1>{url}</h1>
<DataTable>
    <Head>
        <Row>
            <Cell>
                Text
            </Cell>
            <Cell>
                Value
            </Cell>
            <Cell>
                Title
            </Cell>
        </Row>
    </Head>
    <Body>
        {#each cmptCourses as {text, value, title}}
            <Row>   
                <Cell>
                    {text}
                </Cell>
                <Cell>
                    {value}
                </Cell>
                <Cell>
                    {title}
                </Cell>
            </Row>
        {/each}
    </Body>
</DataTable>