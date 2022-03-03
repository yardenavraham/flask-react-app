import { React, useState, useEffect } from 'react'
import "./style.css"
import Item from '../item/item'
import Form from '../form/form';

function Main(props) {

    const [checkBoxArr, setcheckBoxArr] = useState([]);
    const [disableAll, setdisableAll] = useState(false);
    const [salaries, setSalaris] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [employee, setEmployee] = useState();


    useEffect(() => {

        console.log(disableAll)

    }, [disableAll, employee])


    useEffect(() => {
        for (let i = 0; i < props.data.employees.length; i++) {
            checkBoxArr.push(false);
        }

    }, [])


    const setArray = (e, id) => {
        if (e) {
            checkBoxArr[id - 1] = true;
        }
        else {
            checkBoxArr[id - 1] = false;
        }
        console.log(checkBoxArr);

        let countTrue = checkBoxArr.reduce((a, item) => a + item, 0)

        console.log(countTrue);

        if (countTrue == 2) {
            setdisableAll(true);
            for (let i = 0; i < checkBoxArr.length; i++) {
                if (checkBoxArr[i] == true) {
                    let obj = props.data.employees.filter(x => { if (x.ID - 1 === i) return x; })
                    if (salaries[0] != undefined) {
                        if (salaries[0] < obj[0].Salary) {
                            salaries[1] = salaries[0];
                            salaries[0] = obj[0].Salary;
                        }
                        else {
                            salaries[1] = obj[0].Salary;
                        }
                    }
                    else {
                        salaries.push(obj[0].Salary);
                    }
                }
            }
            console.log(salaries);
        }
        else {
            setdisableAll(false);
            setSalaris([]);
            console.log(salaries)
        }

    }


    return (
        <>
            {
                !isEdit && (
                    <div>
                        {!disableAll && (
                            <div className='content'>
                                Pick 2 Employees and see who earns the most
                            </div>)
                        }

                        {disableAll && (
                            <>
                                <div className='whoEarns'>
                                    So...Who earns the most?
                                </div>
                                <div className='leftDiv'></div>
                                <div className='leftSalary'>{salaries[0]}</div>
                                <div className='rightDiv'></div>
                                <div className='rightSalary'>{salaries[1]}</div>

                            </>


                        )

                        }
                        <div className='rectangle'>
                            {
                                props.data.employees.map((item) => {
                                    return <Item key={item.ID} setdisableAll={disableAll} disable={checkBoxArr[item.ID]} name={item.Name} isCheckBox={(e) => setArray(e, item.ID)} callbackEdit={e => { setIsEdit(true); setEmployee(item) }}></Item>
                                })
                            }
                        </div>

                    </div>
                )}

            {
                isEdit && (<Form phone={employee.Phone}
                    address={employee.Address}
                    email={employee.Email}
                    maritalStatus={employee.MaritalStatus}
                    gender={employee.Gender}></Form>)
            }
        </>
    )
}

export default Main