export const mode_overview = (title) => `
title:: ${title}
sec::
 text:: A simple yaat application.
 computerCode::  sample, Bash
`;

export const mode_dotyaatembed = (mode) => `
sample ::: 
> cd docs
> yaat ${mode === "branch" ? "o app.yaat" : "port- 10392"}
`;

export const tree_dotyaatconstruct = () => `
Overview = app.yaat
`;
