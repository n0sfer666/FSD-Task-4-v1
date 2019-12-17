interface IConfiguration {
    readonly orientation: TConfigurationOrientation; 
    readonly start: number | [number, number];
    readonly range: [number, number];
    readonly step: number;
    readonly connect: boolean;
    readonly tooltip: boolean;
}

type TConfigurationOrientation = 'horizontal' | 'vertical';