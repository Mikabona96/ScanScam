// Core
import React, { FC } from 'react';
import { TopRow } from '../TopRow';
import { Table } from '../../Table';

// Bus
// import {} from '../../../bus/'
import * as Data from './data.json';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
    isRaw: boolean
    setIsRaw: React.Dispatch<React.SetStateAction<boolean>>
}
// const rawString = 'Domain Name: google.com\nRegistry Domain ID: 2138514_DOMAIN_COM-VRSN\nRegistrar WHOIS Server: whois.markmonitor.com\nRegistrar URL: http://www.markmonitor.com\nUpdated Date: 2019-09-09T15:39:04+0000\nCreation Date: 1997-09-15T07:00:00+0000\nRegistrar Registration Expiration Date: 2028-09-13T07:00:00+0000\nRegistrar: MarkMonitor, Inc.\nRegistrar IANA ID: 292\nRegistrar Abuse Contact Email: abusecomplaints@markmonitor.com\nRegistrar Abuse Contact Phone: +1.2086851750\nDomain Status: clientUpdateProhibited (https://www.icann.org/epp#clientUpdateProhibited)\nDomain Status: clientTransferProhibited (https://www.icann.org/epp#clientTransferProhibited)\nDomain Status: clientDeleteProhibited (https://www.icann.org/epp#clientDeleteProhibited)\nDomain Status: serverUpdateProhibited (https://www.icann.org/epp#serverUpdateProhibited)\nDomain Status: serverTransferProhibited (https://www.icann.org/epp#serverTransferProhibited)\nDomain Status: serverDeleteProhibited (https://www.icann.org/epp#serverDeleteProhibited)\nRegistrant Organization: Google LLC\nRegistrant State/Province: CA\nRegistrant Country: US\nRegistrant Email: Select Request Email Form at https://domains.markmonitor.com/whois/google.com\nAdmin Organization: Google LLC\nAdmin State/Province: CA\nAdmin Country: US\nAdmin Email: Select Request Email Form at https://domains.markmonitor.com/whois/google.com\nTech Organization: Google LLC\nTech State/Province: CA\nTech Country: US\nTech Email: Select Request Email Form at https://domains.markmonitor.com/whois/google.com\nName Server: ns3.google.com\nName Server: ns4.google.com\nName Server: ns2.google.com\nName Server: ns1.google.com\nDNSSEC: unsigned\nURL of the ICANN WHOIS Data Problem Reporting System: http://wdprs.internic.net/\n>>> Last update of WHOIS database: 2023-10-19T20:40:02+0000 <<<\n\nFor more information on WHOIS status codes, please visit:\n  https://www.icann.org/resources/pages/epp-status-codes\n\nIf you wish to contact this domainâs Registrant, Administrative, or Technical\ncontact, and such email address is not visible above, you may do so via our web\nform, pursuant to ICANNâs Temporary Specification. To verify that you are not a\nrobot, please enter your email address to receive a link to a page that\nfacilitates email communication with the relevant contact(s).\n\nWeb-based WHOIS:\n  https://domains.markmonitor.com/whois\n\nIf you have a legitimate interest in viewing the non-public WHOIS details, send\nyour request and the reasons for your request to whoisrequest@markmonitor.com\nand specify the domain name in the subject line. We will review that request and\nmay ask for supporting documentation and explanation.\n\nThe data in MarkMonitorâs WHOIS database is provided for information purposes,\nand to assist persons in obtaining information about or related to a domain\nnameâs registration record. While MarkMonitor believes the data to be accurate,\nthe data is provided "as is" with no guarantee or warranties regarding its\naccuracy.\n\nBy submitting a WHOIS query, you agree that you will use this data only for\nlawful purposes and that, under no circumstances will you use this data to:\n  (1) allow, enable, or otherwise support the transmission by email, telephone,\nor facsimile of mass, unsolicited, commercial advertising, or spam; or\n  (2) enable high volume, automated, or electronic processes that send queries,\ndata, or email to MarkMonitor (or its systems) or the domain name contacts (or\nits systems).\n\nMarkMonitor reserves the right to modify these terms at any time.\n\nBy submitting this query, you agree to abide by this policy.\n\nMarkMonitor Domain Management(TM)\nProtecting companies and consumers in a digital world.\n\nVisit MarkMonitor at https://www.markmonitor.com\nContact us at +1.8007459229\nIn Europe, at +44.02032062220\n--\n';

export const ResultDomain: FC<PropTypes> = ({ isRaw, setIsRaw }) => {
    const registrarInfo = [
        {
            Name:           'MarkMonitor, Inc.',
            'IANA id':      '292',
            'Whois Server': 'whois.markmonitor.com',
            'Referral URL': 'http://www.markmonitor.com',
            'Abuse Mail':   'abusecomplaints@markmonitor.com',
            'Abuse Phone':  '+1.2086851750',
            Status:         'clientUpdateProhibited (https://www.icann.org/epp#clientUpdateProhibited)clientTransferProhibited (https://www.icann.org/epp#clientTransferProhibited)clientDeleteProhibited (https://www.icann.org/epp#clientDeleteProhibited)serverUpdateProhibited (https://www.icann.org/epp#serverUpdateProhibited)serverTransferProhibited (https://www.icann.org/epp#serverTransferProhibited)serverDeleteProhibited (https://www.icann.org/epp#serverDeleteProhibited)',
        },
    ];

    const ImportantDates = [
        {
            'Expires on':   '2028-09-13',
            'Registred on': '1997-09-15',
            'Updated on':   '2019-09-09',
        },
    ];

    const rawData = JSON.stringify(Data);
    const parsedData = JSON.parse(rawData);

    console.log(parsedData.raw);

    return (
        <S.Container>
            <TopRow
                isRaw = { isRaw }
                setIsRaw = { setIsRaw }
                title = 'google.com'
            />
            {
                !isRaw ? (
                    <>
                        <Table
                            alignValues = 'close'
                            data = { registrarInfo }
                            title = 'Registrar info'
                            variant = '2'
                        />
                        <Table
                            alignValues = 'close'
                            data = { ImportantDates }
                            title = 'Important dates'
                            variant = '2'
                        />
                        <Table
                            alignValues = 'far'
                            data = { registrarInfo }
                            title = 'Registrar info'
                            variant = '2'
                        />
                        <Table
                            alignValues = 'far'
                            data = { ImportantDates }
                            isOpen = { false }
                            title = 'Important dates'
                            variant = '2'
                        />
                    </>
                ) : (
                    <S.Pre>{ parsedData.raw }</S.Pre>
                )
            }
        </S.Container>
    );
};
