import React from 'react'
import { 
    CCard, CCardBody, CCol, CCardHeader, CRow,
    CForm,
    CFormInput,
    CFormLabel,
    CFormSelect,
    CButton,
    CTable,
    CTableBody,
    CTableCaption,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react'

const roleList = [
    { title: 'AM', value: '1' },
    { title: 'SSL', value: '2' },
    { title: 'SL', value: '3' },
    { title: 'SA', value: '4' },
    { title: 'DS', value: '5' },
    ]

const statusList = [
    { title: 'Active', value: '1' },
    { title: 'Inactive', value: '2' },
    ]



const Users = () => {
    
    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Search</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CRow>
                            <CCol md={4}>
                                <div className="mb-3">
                                <CFormLabel htmlFor="userSearchFormNickname">Nickname</CFormLabel>
                                <CFormInput
                                    type="nickname"
                                    id="userSearchFormNickname"
                                    placeholder="Nickname"
                                />
                                </div>
                            </CCol>
                            <CCol md={4}>
                                <div className="mb-3">
                                <CFormLabel htmlFor="userSearchFormEmail">Email address</CFormLabel>
                                <CFormInput
                                    type="email"
                                    id="userSearchFormEmail"
                                    placeholder="name@cathaypacific.com"
                                />
                                </div>
                            </CCol>
                            <CCol md={4}>
                                <div className="mb-3">
                                    <CFormLabel htmlFor="userSearchFormRole">Role</CFormLabel>
                                    <CFormSelect aria-label="Default select example" id="userSearchFormRole">
                                        <option>Select Role</option>
                                        {roleList.map((item, index) => (
                                        <option value={item.value}>{item.title}</option>
                                        ))}
                                    </CFormSelect>
                                </div>
                            </CCol>
                            <CCol md={4}>
                                <div className="mb-3">
                                    <CFormLabel htmlFor="userSearchFormStatus">Status</CFormLabel>
                                    <CFormSelect aria-label="Default select example" id="userSearchFormStatus">
                                        <option>Select Status</option>
                                        {statusList.map((item, index) => (
                                        <option value={item.value}>{item.title}</option>
                                        ))}
                                    </CFormSelect>
                                </div>    
                            </CCol>
                     
                     
                            <CCol md={12}>
                                <div className="mb-12">
                                    <CButton color="primary" type="submit" className="mb-3">
                                        Submit
                                    </CButton>

                                    <CButton color="danger" type="submit" className="mb-3 ms-3">
                                        Reset
                                    </CButton>
                                </div>
                            </CCol>
                        </CRow>
                        
                    </CCardBody>
                </CCard>    
            </CCol>


            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>List</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CCol md={12}>
                                <div className="mb-12">
                                    <CButton color="primary" type="submit" className="mb-3">
                                        New
                                    </CButton>

                                </div>
                            </CCol>

                        <CTable bordered>
                            <CTableHead>
                                <CTableRow>
                                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Email address</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Nickname</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Role</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Last Login Time</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                <CTableRow>
                                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                    <CTableDataCell>kingwa_wang@cathaypacific.com</CTableDataCell>
                                    <CTableDataCell>Kingwa Wang</CTableDataCell>
                                    <CTableDataCell>SSL</CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                </CTableRow>
                            </CTableBody>
                        </CTable>                             
                    </CCardBody>
                </CCard>
            </CCol>

        </CRow>

    )


}

export default Users