
import React from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import {Job, ModelType} from '../../Types/Job'
import { SectionComponentSpec } from "../../App";

const ModelSelectionSectionComponent: React.FC<
  SectionComponentSpec
> = ({ onUpdate, job}) => {
  const {modelType} = job;

  return (
      <FormGroup>
            <FormControl fullWidth>
              <InputLabel id="travel-mode-label">
                Model Selection (Advanced)
              </InputLabel>
              <Select
                labelId="travel-mode-label"
                id="model-selection"
                value={modelType}
                defaultValue={"raam"}
                label="Model Selection (Advanced)"
                onChange={(e) => {
                  onUpdate({
                    modelType: e.target.value as ModelType,
                  });
                }}
              >
                <MenuItem value={"raam"}>Rational agent access model (Default)</MenuItem>
                <MenuItem value={"2sfca"}>Two-stage floating catchment area access score</MenuItem>
              </Select>
            </FormControl>
      </FormGroup>
  );
};
const AdditionalDescription: React.FC<{job:Job}> = ({job}) => {
    return (
        <Typography>
            This is an advanced setting. We provide multiple different access gravity models as our advanced metric, but most users will not need to change this setting.
        </Typography>
    )
}
const canProgress = (_job: Job) => true;
const shouldShow = (job: Job, step: number) => step > 2 && !!job.includeModelMetrics
const prompt = (_job: Job) => "Model Selection";
const tooltip = (_job: Job) => "There are two access models currently available. Advanced users may select between a RAAM and 2SFCA model. You can probably leave this as the default.";

const ModelSelectionSection = {
    component: ModelSelectionSectionComponent,
    additionalDescription: AdditionalDescription,
    canProgress,
    shouldShow,
    prompt,
    tooltip,
    name:"ModelSelectionSection"
};

export default ModelSelectionSection;
