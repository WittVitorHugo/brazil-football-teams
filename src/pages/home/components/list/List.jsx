import Card from './card/Card'
import './List.css'

const List = ({ search, teams }) => {

    return (
        <div className='container'>
            <div className='head'>
                <h2>Times do Brasil</h2>
                <img src='https://media-3.api-sports.io/flags/br.svg' />
            </div>
            <div className='list'>
                {
                    teams.filter((value) => {
                        if (search === "") {
                            return value
                        } else if (
                            value.team.name.toLowerCase().includes(search.toLowerCase())
                        ) {
                            return value;
                        }
                    })
                        .map((team) => <Card key={team.team.id} name={team.team.name} logo={team.team.logo} />)
                }
            </div>
        </div>
    )
}

export default List