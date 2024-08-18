import { layout } from "tscircuit";
import manual_edits from "./MyCircuit.manual-edits";
import { DualInlinePackage } from "@tscircuit/footprints";

export const MyCircuit = () => (
  <group layout={layout().manualEdits(manual_edits)}>
    <resistor
      resistance="10kohm"
      name="R1"
      footprint="lsdfols"
      schX={0}
      schY={0}
      pcbX={0}
      pcbY={0}
    />
    <resistor
      resistance="10kohm"
      name="R2"
      footprint="0805"
      schX={2}
      schY={0}
      pcbX={4}
      pcbY={0}
    />
    <chip
      name="B1"
      schPortArrangement={{ leftSize: 3, rightSize: 3 }}
      footprint="sot236"
      pinLabels={{
        1: "PWR",
        2: "NC",
        3: "RG",
        4: "D0",
        5: "D1",
        6: "GND",
      }}
      schX={6}
      pcbX={10}
      pcbY={0}
    />
    <bug footprint={<DualInlinePackage pad_count={8} />} name="bug" />
    <trace from=".R2 > .left" to=".R2 > .left" />
  </group>
);
