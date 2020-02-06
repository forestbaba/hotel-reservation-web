import React, { useCallback, useState,useEffect } from 'react'
import Card from '../../../../components/card'
import './style.scss'
import ReactTable from '../../../../components/table/Table'
import Topbar from '../../../../components/top-bar'
import Searchbar from '../../../../components/search-bar/search'
import Dropdownselect from '../../../../components/Dropdownselect'
import FilterComponent from '../../../../components/filter-by'
import Addbutton from '../../../../components/buttons/add-button'
import AddNewDialog from '../add-new'
import firebase from 'firebase';




const  Rooms =()=> {

    const [state, setState] = useState('')
    const [showadd, setShowAdd] =useState(false)


    useEffect(() =>{
        console.log('Dropping the use effect')
        const db = firebase.firestore();

    },[])
   

   const  handleDropdown =()=> {
        console.log('Changing')
    }

    const selectTable =()=> {
        console.log('+======> this is table has been selected')
    }

   const handleChange = (e) => {
        // console.log('Name++: ', [e.target.name])
        // // this.setState({email:e.target.value})
        // const { name, value } = e.target;
        // this.setState({ [name]: [value] });

        const value = e.target.value;
        setState({
             ...state,
            [e.target.name]: value
        });

        console.log('===Name:===Value: '+value)
        
    }
    const handleSubmit = (e) => {


        let db = firebase.firestore();
		let ref = db.collection('rooms').doc();
		const id = ref.id;

        e.preventDefault()
        console.log('The values of setState: ', state)
        console.log('The email: ', state.name)
        console.log('The password: ', state.password)

        db.collection('rooms').doc(id).set({
                        uid: id,
                        title:state.title,
                        description:state.description,
                        price:state.price
						
					}).then(function () {

						console.log('Document successfully written!');
						// history.push('/merchant')
					}).catch(function (error) {
						console.error('An unexpected error occurred, please try again later!' + error);
						return;
					});
        setShowAdd(!showadd)

    }

   const handleAddRooms =()=> {
        console.log('Handle click press')
        // console.log('The Value of email is: ', this.state.email)
        setShowAdd( !showadd )
    }

        return (
            <div className='dashboard'>
                <Topbar title={'Rooms'} />

                <div className='table-holder'>
                    <div className='toolkit-holder'>
                        <Searchbar placeholder={'Search users'} />
                        <FilterComponent handleDropdown={handleDropdown} />
                        <Addbutton handleClick={handleAddRooms} />
                    </div>
                    <ReactTable onClick={selectTable} />
                </div>
                {showadd && <AddNewDialog
                    closePopup={handleAddRooms}
                    handleChange={handleChange}
                    onSubmit={handleSubmit}/>}
            </div>
        )

}
export default Rooms;