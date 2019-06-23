package com.example.demo;

import com.container.epcglobal.epcis.xsd._1.EPCISDocumentType;
import lombok.Data;

@Data
public class PushContainer {
    private String mnemonic = "wheat divide clerk blast avoid retire avoid hammer current drastic deputy tent";
    private EPCISDocumentType payload;


    public EPCISDocumentType getPayload() {
        return payload;
    }

    public void setPayload(EPCISDocumentType payload) {
        this.payload = payload;
    }

    public String getMnemonic() {
        return mnemonic;
    }

    public void setMnemonic(String mnemonic) {
        this.mnemonic = mnemonic;
    }
}
