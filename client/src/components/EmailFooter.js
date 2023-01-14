const EmailFooter = () => {
    return(
        <table width="100%" cellPadding="0" cellSpacing="0" border="0" st-sortable="postfooter"
     style={{backgroundColor: '#ededed'}}>
     <tbody>
         <tr>
             <td>
                 <table width="600" cellPadding="0" cellSpacing="0" border="0" align="center" className="devicewidth">
                     <tbody>
                         <tr>
                             <td style={{width: '100%', height: '20px'}}></td>
                         </tr>
                         <tr>
                             <td align="center" valign="middle"
                                 style={{fontFamily: 'Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif', fontSize: '12px', lineHeight: '26px', fontWeight: 'normal', color: '#7d7d7d', textTransform: 'uppercase'}}
                                 st-content="preheader">
                                 Austin &bull; Birmingham &bull; Chicago &bull; Dallas &bull; Denver <br /> Houston
                                 &bull; Miami &bull; Nashville &bull; Raleigh &bull; San Antonio
                             </td>
                         </tr>
                         <tr>
                             <td style={{width: '100%', height: '20px'}}></td>
                         </tr>
                     </tbody>
                 </table>
             </td>
         </tr>
         <tr>
             <td width="100%">
                 <table width="560" style={{width:'560px'}} cellPadding="0" cellSpacing="0" border="0" align="center"
                     className="devicewidth">
                     <tbody>
                         <tr>
                             <td align="center" valign="middle"
                                 style={{fontFamily: 'Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif', fontSize: '9px', lineHeight: '12px', fontWeight: 'normal', color: '#7d7d7d'}}
                                 st-content="preheader">
                                 9805 Katy Freeway, Suite 650, Houston, TX 77024<br /><br />
                                 <a href="*|UNSUB|*" style={{color: '#ddb63c !important'}}>Unsubscribe From Our List</a>
                                 &nbsp; | &nbsp; <a href="*|UPDATE_PROFILE|*"
                                     style={{color: '#ddb63c !important'}}>Update Your Information</a>
                             </td>
                         </tr>
                         <tr>
                             <td style={{width: '100%', height: '20px'}}></td>
                         </tr>
                         <tr>
                             <td align="left" valign="middle"
                                 style={{fontFamily: 'Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif', fontSize: '9px', lineHeight: '12px', fontWeight: 'normal', color: '#7d7d7d'}}
                                 st-content="preheader">
                                 This email was sent to you because you opted in to receive our emails either in one
                                 of our restaurants, on our website, when making a reservation, making an online
                                 order, providing feedback or when accessing our Wi-Fi. Your email address will only
                                 be used for this email club subscription and will not be shared with anyone. If you
                                 would prefer not to hear from us, you can stop receiving our emails by clicking the
                                 unsubscribe link above this message in any of our emails.
                             </td>
                         </tr>
                         <tr>
                             <td style={{width: '100%', height: '80px'}}></td>
                         </tr>
                     </tbody>
                 </table>
             </td>
         </tr>
     </tbody>
 </table>
    )
}

export default EmailFooter;