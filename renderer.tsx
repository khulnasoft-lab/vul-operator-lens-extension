import {Renderer} from "@k8slens/extensions";
import React from "react"
import {VulnerabilityReportPage} from "./src/vulnerabilityreports/page";
import {ExposedSecretReportPage} from "./src/exposedsecretreports/page";
import {VulnerabilityReport} from "./src/vulnerabilityreports/types";
import {
    VulnerabilityReportDetails,
    VulnerabilityReportDetailsProps
} from "./src/vulnerabilityreports/details";
import {VUL_OPERATOR_API_VERSION} from "./src/vul_operator/constants";
import {ClusterConfigAuditReport, ConfigAuditReport} from "./src/configauditreports/types";
import {ClusterConfigAuditReportPage, ConfigAuditReportPage} from "./src/configauditreports/page";
import {
    ClusterConfigAuditReportDetails,
    ClusterConfigAuditReportDetailsProps,
    ConfigAuditReportDetails,
    ConfigAuditReportDetailsProps
} from "./src/configauditreports/details";
import {WorkloadConfigAuditReports} from "./src/workloads/configauditreports";
import {WorkloadVulnerabilityReports} from "./src/workloads/vulnerabilityreports";
import {WorkloadExposedSecretReports} from "./src/workloads/exposedsecretreports";
import {ExposedSecretReport} from "./src/exposedsecretreports/types";
import {ExposedSecretReportDetails, ExposedSecretReportDetailsProps} from "./src/exposedsecretreports/details";
import {ClusterRbacAssessmentReportPage, RbacAssessmentReportPage} from "./src/rbacassessmentreports/page";
import { ClusterRbacAssessmentReport, RbacAssessmentReport } from "./src/rbacassessmentreports/types";
import {InfraAssessmentReport } from "./src/infraassessmentreports/types";
import {
    ClusterRbacAssessmentReportDetailsProps,
    RbacAssessmentReportDetailsProps
} from "./src/rbacassessmentreports/details";
import {InfraAssessmentReportDetails, InfraAssessmentReportDetailsProps} from "./src/infraassessmentreports/details";
import {WorkloadRbacAssessmentReports} from "./src/workloads/rbacassessmentreport";
import {WorkloadClusterRbacAssessmentReports} from "./src/workloads/rbacassessmentreport";
import {WorkloadInfraAssessmentReports} from "./src/workloads/infraassessmentreport";
import {InfraAssessmentReportPage} from "./src/infraassessmentreports/page";

export function CertificateIcon(props: Renderer.Component.IconProps) {
    return <Renderer.Component.Icon {...props} material="security"/>
}

export default class vulOperatorExtension extends Renderer.LensExtension {

    clusterPages = [
        {
            id: "vulnerabilityreports",
            components: {
                Page: () => <VulnerabilityReportPage extension={this}/>,
            }
        },
        {
            id: "configauditreports",
            components: {
                Page: () => <ConfigAuditReportPage extension={this}/>,
            }
        },
        {
            id: "exposedsecretreports",
            components: {
                Page: () => <ExposedSecretReportPage extension={this}/>,
            }
        },
        {
            id: "clusterconfigauditreports",
            components: {
                Page: () => <ClusterConfigAuditReportPage extension={this}/>,
            }
        },
        {
            id: "rbacassessmentreports",
            components: {
                Page: () => <RbacAssessmentReportPage extension={this}/>,
            }
        },
        {
            id: "clusterrbacassessmentreports",
            components: {
                Page: () => <ClusterRbacAssessmentReportPage extension={this}/>,
            }
        },
        {
            id: "infraassessmentreports",
            components: {
                Page: () => <InfraAssessmentReportPage extension={this}/>,
            }
        }
    ]

    clusterPageMenus = [
        {
            id: "vul-operator",
            title: "vul-operator",
            components: {
                Icon: CertificateIcon
            }
        },
        {
            parentId: "vul-operator",
            target: {pageId: "vulnerabilityreports"},
            title: "VulnerabilityReports",
            components: {
                Icon: CertificateIcon
            }
        },
        {
            parentId: "vul-operator",
            target: {pageId: "configauditreports"},
            title: "ConfigAuditReports",
            components: {
                Icon: CertificateIcon
            }
        },
        {
            parentId: "vul-operator",
            target: {pageId: "exposedsecretreports"},
            title: "ExposedSecretReports",
            components: {
                Icon: CertificateIcon
            }
        },
        {
            parentId: "vul-operator",
            target: {pageId: "clusterconfigauditreports"},
            title: "ClusterConfigAuditReports",
            components: {
                Icon: CertificateIcon
            }
        },
        {
            parentId: "vul-operator",
            target: {pageId: "rbacassessmentreports"},
            title: "RbacAssessmentReports",
            components: {
                Icon: CertificateIcon
            }
        },
        {
            parentId: "vul-operator",
            target: {pageId: "clusterrbacassessmentreports"},
            title: "ClusterRbacAssessmentReports",
            components: {
                Icon: CertificateIcon
            }
        }
    ]

    kubeObjectDetailItems = [
        {
            kind: "Pod",
            apiVersions: ["v1"],
            priority: 9,
            components: {
                Details: (props: Renderer.Component.KubeObjectDetailsProps) =>
                    <React.Fragment>
                        <WorkloadConfigAuditReports {...props} />
                        <WorkloadVulnerabilityReports {...props}/>
                        <WorkloadExposedSecretReports {...props}/>
                        <WorkloadInfraAssessmentReports {...props}/>
                    </React.Fragment>
            }
        },
        {
            kind: "Deployment",
            apiVersions: ["apps/v1"],
            priority: 9,
            components: {
                Details: (props: Renderer.Component.KubeObjectDetailsProps) =>
                    <React.Fragment>
                        <WorkloadConfigAuditReports {...props} />
                        <WorkloadVulnerabilityReports {...props}/>
                        <WorkloadExposedSecretReports {...props}/>
                        <WorkloadInfraAssessmentReports {...props}/>
                    </React.Fragment>
            }
        },
        {
            kind: "DaemonSet",
            apiVersions: ["apps/v1"],
            priority: 9,
            components: {
                Details: (props: Renderer.Component.KubeObjectDetailsProps) =>
                    <React.Fragment>
                        <WorkloadConfigAuditReports {...props} />
                        <WorkloadVulnerabilityReports {...props}/>
                        <WorkloadExposedSecretReports {...props}/>
                        <WorkloadInfraAssessmentReports {...props}/>
                    </React.Fragment>
            }
        },
        {
            kind: "StatefulSet",
            apiVersions: ["apps/v1"],
            priority: 9,
            components: {
                Details: (props: Renderer.Component.KubeObjectDetailsProps) =>
                    <React.Fragment>
                        <WorkloadConfigAuditReports {...props} />
                        <WorkloadVulnerabilityReports {...props}/>
                        <WorkloadExposedSecretReports {...props}/>
                        <WorkloadInfraAssessmentReports {...props}/>
                    </React.Fragment>
            }
        },
        {
            kind: "ReplicaSet",
            apiVersions: ["apps/v1"],
            priority: 9,
            components: {
                Details: (props: Renderer.Component.KubeObjectDetailsProps) =>
                    <React.Fragment>
                        <WorkloadConfigAuditReports {...props} />
                        <WorkloadVulnerabilityReports {...props}/>
                        <WorkloadExposedSecretReports {...props}/>
                        <WorkloadInfraAssessmentReports {...props}/>
                    </React.Fragment>
            }
        },
        {
            kind: "Role",
            apiVersions: ["rbac/v1"],
            priority: 9,
            components: {
                Details: (props: Renderer.Component.KubeObjectDetailsProps) =>
                    <React.Fragment>
                        <WorkloadRbacAssessmentReports {...props} />
                    </React.Fragment>
            }
        },
        {
            kind: "ClusterRole",
            apiVersions: ["rbac/v1"],
            priority: 9,
            components: {
                Details: (props: Renderer.Component.KubeObjectDetailsProps) =>
                    <React.Fragment>
                        <WorkloadClusterRbacAssessmentReports {...props} />
                    </React.Fragment>
            }
        },
        {
            kind: VulnerabilityReport.kind,
            apiVersions: [VUL_OPERATOR_API_VERSION],
            components: {
                Details: (props: VulnerabilityReportDetailsProps) => <VulnerabilityReportDetails
                    showObjectMeta={true} {...props} />
            }
        },
        {
            kind: ConfigAuditReport.kind,
            apiVersions: [VUL_OPERATOR_API_VERSION],
            components: {
                Details: (props: ConfigAuditReportDetailsProps) => <ConfigAuditReportDetails
                    showObjectMeta {...props} />
            }
        },
        {
            kind: ClusterConfigAuditReport.kind,
            apiVersions: [VUL_OPERATOR_API_VERSION],
            components: {
                Details: (props: ClusterConfigAuditReportDetailsProps) => <ClusterConfigAuditReportDetails
                    showObjectMeta {...props} />
            }
        },
        {
            kind: ExposedSecretReport.kind,
            apiVersions: [VUL_OPERATOR_API_VERSION],
            components: {
                Details: (props: ExposedSecretReportDetailsProps) => <ExposedSecretReportDetails
                    showObjectMeta {...props} />
            }
        },
        {
            kind: RbacAssessmentReport.kind,
            apiVersions: [VUL_OPERATOR_API_VERSION],
            components: {
                Details: (props: RbacAssessmentReportDetailsProps) => <ConfigAuditReportDetails
                    showObjectMeta {...props} />
            }
        },
        {
            kind: InfraAssessmentReport.kind,
            apiVersions: [VUL_OPERATOR_API_VERSION],
            components: {
                Details: (props: InfraAssessmentReportDetailsProps) => <InfraAssessmentReportDetails
                    showObjectMeta {...props} />
            }
        },
        {
            kind: ClusterRbacAssessmentReport.kind,
            apiVersions: [VUL_OPERATOR_API_VERSION],
            components: {
                Details: (props: ClusterRbacAssessmentReportDetailsProps) => <ClusterConfigAuditReportDetails
                    showObjectMeta {...props} />
            }
        },
    ]

}
