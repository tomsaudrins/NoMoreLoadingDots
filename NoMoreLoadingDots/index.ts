import {IInputs, IOutputs} from "./generated/ManifestTypes";

export class NoMoreLoadingDots implements ComponentFramework.StandardControl<IInputs, IOutputs> {

    constructor()
    {

    }

    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement): void
    {

    }

    public updateView(context: ComponentFramework.Context<IInputs>): void
    {
    }

    public getOutputs(): IOutputs
    {
        return {};
    }

    public destroy(): void
    {
   
    }
}
