import {
  Document,
  PDFViewer,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import React from "react";
import { QRCode } from "react-qrcode-logo";
import logo from "../assets/images/logo-web.png";

const Ticket = () => {
  const styles = StyleSheet.create({
    page: {
      color: "black",
      margin: "20px",
    },
    section: {
      margin: 10,
      padding: 10,
    },
    viewer: {
      width: window.innerWidth, //the pdf viewer will take up all of the width and height
      height: window.innerHeight,
      paddingTop: "140px",
    },
  });
  return (
    <PDFViewer style={styles.viewer}>
      <Document pageLayout="singlePage">
        <Page size="A4" style={styles.page}>
          <View>
            {/* <QRCode
              value="https://www.etceventsltd.com/"
              logoImage={logo}
              bgColor="#000"
              fgColor="#fff"
              logoWidth={60}
              logoHeight={30}
              removeQrCodeBehindLogo
            /> */}
          </View>
          <View>
            <Text>Hello World</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default Ticket;
