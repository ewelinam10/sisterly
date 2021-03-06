import { Card, Button } from 'react-bootstrap';
import React from "react";
interface GroupOptions {
    name: string;
    description: string;
    numberOfTasks: number;
    hash1: string;
    hash2: string;
    hash3: string;
}
const groupsMock = [
    {
        name: 'ASERTYWNOŚĆ',
        description: 'Grupa ćwicząca asertywność poprzez odgrywanie scenek z życia uczestników',
        numberOfTasks: '2',
        hash1: '#asertywnosc',
        hash2: '#samodoskonalenie',
        hash3: '',
    },
    {
        name: 'OGRODNICTWO',
        description: 'Wspólne rozpoczęcie hodowli warzyw i owoców na balkonie, rośliny wybierzemy na spotkaniu',
        numberOfTasks: '4',
        hash1: '#ogrodnictwo',
        hash2: '#naswiezympowietrzu'
    },
    {
        name: 'PRZEBRANŻUJ SIĘ!',
        description: 'Gromadzimy dziewczyny szukające nowej pracy w odmiennej od dotychczasowej branży, pomagamy sobie ze stresem i problemami',
        numberOfTasks: '3',
        hash1: '#praca',
        hash2: '#branza',
        hash3: '#zmiany',
    },
    {
        name: 'PROGRAMOWANIE',
        description: 'Dołącz do zespołu i twórz razem z nami aplikację na Androida!',
        numberOfTasks: '3',
        hash1: '#codegirls',
        hash2: '#programming',
        hash3: '#android',
    },
    {
        name: 'NAUKA',
        description: 'Podziel się z nami swoimi sposobami na naukę!',
        numberOfTasks: '3',
        hash1: '#praca',
        hash2: '#branza',
        hash3: '#zmiany',
    },
    {
        name: 'DOKTORAT',
        description: 'Jeśli piszesz doktorat i potrzebujesz wsparcia od innych doktorantek, zapraszamy!',
        numberOfTasks: '5',
        hash1: '#praca',
        hash2: '#doktorat',
        hash3: '#wsparcie',
    },
    {
        name: 'PREZENTUJEMY',
        description: 'Poćwicz z nami prezentacje przed publicznością. Pokonaj tremę i naucz się jasno wyrażać myśli.',
        numberOfTasks: '2',
        hash1: '#prezentacja',
        hash2: '#samodoskonalenie',
        hash3: '',
    }
]
type GroupsViewProps = {
    groupsType: string // pozniej enum
}
class GroupsView extends React.Component<GroupsViewProps> {
    private linkToExampleOfGroups: string = 'https://gist.githubusercontent.com/ewelinam10/f1c304f6a2c21a311af97f92f2483967/raw/c2573affe9384ca64182388e7b0cf6adeec5666d/gistfile1.txt';
    // public state: GroupsViewState = {
    //     groups: Array() as GroupOptions[]
    // }
    // constructor(props: GroupsViewProps) {
    //     super(props);
    //     fetch(this.groupsMock)
    //         .then(res => res.json())
    //         .then((data) => {
    //             this.setState({ groups: data.groups })
    //         })
    //         .catch(console.log)
    // }
    render() {
        let i = 0;
        return (
            <div className='contain'>
                {

                    groupsMock.map((group) => {
                        i++;
                        return (
                            <Card className="tile">
                                <Card.Body>
                                    <div className={['img', i.toString()].join(' ')} />
                                    <Card.Title className="title">{group.name}</Card.Title>
                                    <div className="hashtags">
                                        <div className="hash1">{group.hash1}</div>
                                        <div className="hash2">{group.hash2}</div>
                                        <div className="hash3">{group.hash3}</div>
                                    </div>
                                    <svg width="121" height="25" viewBox="0 0 121 25" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12.4998 6.25008C13.6457 6.25008 14.5832 7.18758 14.5832 8.33342C14.5832 9.47925 13.6457 10.4167 12.4998 10.4167C11.354 10.4167 10.4165 9.47925 10.4165 8.33342C10.4165 7.18758 11.354 6.25008 12.4998 6.25008ZM12.4998 16.6667C15.3123 16.6667 18.5415 18.0105 18.7498 18.7501H6.24984C6.48942 18.0001 9.69775 16.6667 12.4998 16.6667ZM12.4998 4.16675C10.1978 4.16675 8.33317 6.03133 8.33317 8.33342C8.33317 10.6355 10.1978 12.5001 12.4998 12.5001C14.8019 12.5001 16.6665 10.6355 16.6665 8.33342C16.6665 6.03133 14.8019 4.16675 12.4998 4.16675ZM12.4998 14.5834C9.71859 14.5834 4.1665 15.9792 4.1665 18.7501V20.8334H20.8332V18.7501C20.8332 15.9792 15.2811 14.5834 12.4998 14.5834Z"
                                            fill="#5E548E" />
                                        <path
                                            d="M36.4998 6.25008C37.6457 6.25008 38.5832 7.18758 38.5832 8.33342C38.5832 9.47925 37.6457 10.4167 36.4998 10.4167C35.354 10.4167 34.4165 9.47925 34.4165 8.33342C34.4165 7.18758 35.354 6.25008 36.4998 6.25008ZM36.4998 16.6667C39.3123 16.6667 42.5415 18.0105 42.7498 18.7501H30.2498C30.4894 18.0001 33.6978 16.6667 36.4998 16.6667ZM36.4998 4.16675C34.1978 4.16675 32.3332 6.03133 32.3332 8.33342C32.3332 10.6355 34.1978 12.5001 36.4998 12.5001C38.8019 12.5001 40.6665 10.6355 40.6665 8.33342C40.6665 6.03133 38.8019 4.16675 36.4998 4.16675ZM36.4998 14.5834C33.7186 14.5834 28.1665 15.9792 28.1665 18.7501V20.8334H44.8332V18.7501C44.8332 15.9792 39.2811 14.5834 36.4998 14.5834Z"
                                            fill="#5E548E" />
                                        <path
                                            d="M60.4998 6.25008C61.6457 6.25008 62.5832 7.18758 62.5832 8.33342C62.5832 9.47925 61.6457 10.4167 60.4998 10.4167C59.354 10.4167 58.4165 9.47925 58.4165 8.33342C58.4165 7.18758 59.354 6.25008 60.4998 6.25008ZM60.4998 16.6667C63.3123 16.6667 66.5415 18.0105 66.7498 18.7501H54.2498C54.4894 18.0001 57.6978 16.6667 60.4998 16.6667ZM60.4998 4.16675C58.1978 4.16675 56.3332 6.03133 56.3332 8.33342C56.3332 10.6355 58.1978 12.5001 60.4998 12.5001C62.8019 12.5001 64.6665 10.6355 64.6665 8.33342C64.6665 6.03133 62.8019 4.16675 60.4998 4.16675ZM60.4998 14.5834C57.7186 14.5834 52.1665 15.9792 52.1665 18.7501V20.8334H68.8332V18.7501C68.8332 15.9792 63.2811 14.5834 60.4998 14.5834Z"
                                            fill="#5E548E" />
                                        <path
                                            d="M84.4998 6.25008C85.6457 6.25008 86.5832 7.18758 86.5832 8.33342C86.5832 9.47925 85.6457 10.4167 84.4998 10.4167C83.354 10.4167 82.4165 9.47925 82.4165 8.33342C82.4165 7.18758 83.354 6.25008 84.4998 6.25008ZM84.4998 16.6667C87.3123 16.6667 90.5415 18.0105 90.7498 18.7501H78.2498C78.4894 18.0001 81.6978 16.6667 84.4998 16.6667ZM84.4998 4.16675C82.1978 4.16675 80.3332 6.03133 80.3332 8.33342C80.3332 10.6355 82.1978 12.5001 84.4998 12.5001C86.8019 12.5001 88.6665 10.6355 88.6665 8.33342C88.6665 6.03133 86.8019 4.16675 84.4998 4.16675ZM84.4998 14.5834C81.7186 14.5834 76.1665 15.9792 76.1665 18.7501V20.8334H92.8332V18.7501C92.8332 15.9792 87.2811 14.5834 84.4998 14.5834Z"
                                            fill="#1DBA82" />
                                        <path
                                            d="M108.5 6.25008C109.646 6.25008 110.583 7.18758 110.583 8.33342C110.583 9.47925 109.646 10.4167 108.5 10.4167C107.354 10.4167 106.417 9.47925 106.417 8.33342C106.417 7.18758 107.354 6.25008 108.5 6.25008ZM108.5 16.6667C111.312 16.6667 114.542 18.0105 114.75 18.7501H102.25C102.489 18.0001 105.698 16.6667 108.5 16.6667ZM108.5 4.16675C106.198 4.16675 104.333 6.03133 104.333 8.33342C104.333 10.6355 106.198 12.5001 108.5 12.5001C110.802 12.5001 112.667 10.6355 112.667 8.33342C112.667 6.03133 110.802 4.16675 108.5 4.16675ZM108.5 14.5834C105.719 14.5834 100.167 15.9792 100.167 18.7501V20.8334H116.833V18.7501C116.833 15.9792 111.281 14.5834 108.5 14.5834Z"
                                            fill="#1DBA82" />
                                    </svg>
                                    <div className="wrap">
                                        <Card.Text className="description">
                                            {group.description}
                                            <Button variant="primary" className='btn'>Dołącz do
                                                grupy</Button></Card.Text></div>
                                </Card.Body>
                            </Card>
                        )
                    })}
            </div>
        )
    }
};
export default GroupsView;