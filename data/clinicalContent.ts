// ─── Types ────────────────────────────────────────────────────────────────────

export interface EvaluationCriterion {
    label: string;
    desc: string;
}

export interface Treatment {
    title: string;
    description: string;
}

export interface TechApproach {
    label: string;
}

export interface RelatedLink {
    label: string;
    href: string;
}

export interface ConditionData {
    slug: string;
    type: 'condition';
    // SEO
    metaTitle: string;
    metaDescription: string;
    // Hero
    heroTitle: string;
    heroCategory: string;
    heroDescription: string;
    // Overview Section
    overviewSectionLabel: string;
    overviewHeading: string;
    overviewBody: string[];
    overviewCardTitle: string;
    overviewCardIcon: string; // lucide icon name as string (used for lookup)
    evaluationCriteria: EvaluationCriterion[];
    // Treatments Section
    treatmentSectionLabel: string;
    treatmentHeading: string;
    treatmentSubheading: string;
    treatments: Treatment[];
    // CTA Section
    ctaQuestion: string;
    ctaAnswer: string;
    ctaLabel: string;
    // Emergency banner (optional)
    emergencyBanner?: {
        title: string;
        description: string;
        ctaText: string;
        ctaHref: string;
        isWarningIcon: boolean;
    };
    // Related links shown at bottom of overview
    relatedLinks?: RelatedLink[];
    // Image for listing card
    image: string;
    // Listing card data
    listingTitle: string;
    listingSubtitle: string;
    listingDescription: string;
    listingActionText: string;
    iconName: string;
    videoUrl?: string;
}

export interface ProcedureData {
    slug: string;
    type: 'procedure';
    // SEO
    metaTitle: string;
    metaDescription: string;
    // Hero
    heroTitle: string;
    heroCategory: string;
    heroDescription: string;
    // Overview Section
    overviewSectionLabel: string;
    overviewHeading: string;
    overviewBody: string[];
    technicalApproaches: string[];
    // Time-Critical / Info Card (left card)
    infoCardIcon: string;
    infoCardAccentColor: string;
    infoCardLabel: string;
    infoCardTitle: string;
    infoCardBody: string;
    infoCardHighlight: string;
    // Clinical Indications
    indicationsSectionLabel: string;
    indicationsHeading: string;
    indicationsBody: string[];
    relatedLinks?: RelatedLink[];
    // Emergency banner (optional)
    emergencyBanner?: {
        title: string;
        description: string;
        ctaText: string;
        ctaHref: string;
        isWarningIcon: boolean;
    };
    // CTA at end
    ctaQuestion?: string;
    ctaAnswer?: string;
    ctaLabel?: string;
    // Listing
    listingTitle: string;
    listingDescription: string;
    listingDetails: string[];
    listingActionText: string;
    iconName: string;
    image: string;
    videoUrl?: string;
}

export type ClinicalEntry = ConditionData | ProcedureData;

// ─── Conditions ───────────────────────────────────────────────────────────────

export const conditions: ConditionData[] = [
    {
        slug: 'brain-aneurysms',
        type: 'condition',
        metaTitle: 'Brain Aneurysm Specialist in Kochi | Dr. Soumya Ranjan Malla',
        metaDescription:
            'Expert endovascular coiling, flow diversion, and vascular reconstruction for brain aneurysms. Minimally invasive treatment options in Kochi, Kerala.',
        heroTitle: 'Brain Aneurysm Specialist in Kochi',
        heroCategory: 'Condition Overview',
        heroDescription:
            'Comprehensive evaluation and minimally invasive treatment of ruptured and unruptured aneurysms.',
        overviewSectionLabel: 'Clinical Understanding',
        overviewHeading: 'Understanding Brain Aneurysms',
        overviewBody: [
            'A brain (cerebral) aneurysm is a localized bulging or dilatation of an arterial wall in the brain, often occurring at branching points of major arteries. Over time, constant hemodynamics can weaken the vessel wall, leading to a risk of leakage or sudden rupture.',
            'Rupture causes a subarachnoid haemorrhage (bleeding in the space around the brain), which is a critical medical emergency. Modern endovascular techniques allow specialist interventional neuroradiologists to treat both unruptured and ruptured aneurysms using catheters accessed through blood vessels.',
        ],
        overviewCardTitle: 'Key Evaluation Criteria',
        overviewCardIcon: 'Shield',
        evaluationCriteria: [
            {
                label: 'Size & Anatomy',
                desc: 'Careful mapping of aneurysm dimensions, width of the neck, and relationship with parent arteries.',
            },
            {
                label: 'Location Details',
                desc: 'Specific location within the cerebral circulation tells us the rupture risk and helps choose treatment.',
            },
            {
                label: 'Patient Symptoms & Risk Factors',
                desc: 'Reviewing family medical history, smoking status, hypertension control, and whether the aneurysm causes headaches or visual pressure.',
            },
        ],
        treatmentSectionLabel: 'Endovascular Treatment',
        treatmentHeading: 'Minimally Invasive Interventions',
        treatmentSubheading:
            'Dr. Soumya Ranjan Malla provides advanced endovascular treatments to secure ruptured and unruptured aneurysms without opening the skull.',
        treatments: [
            {
                title: 'Simple Coiling',
                description:
                    'Packing the aneurysm sac with detachable platinum microcoils via endovascular access to induce clotting and prevent rupture, leaving the parent artery fully open.',
            },
            {
                title: 'Balloon-Assisted Coiling',
                description:
                    'Temporary deployment of a microballoon catheter across the aneurysm neck to safely support microcoil delivery inside wide-necked aneurysms, protecting the parent vessel.',
            },
            {
                title: 'Stent-Assisted Coiling',
                description:
                    'Deployment of a permanent intracranial microstent across the aneurysm neck. The stent serves as a scaffold to keep coils securely packed inside complex wide-necked aneurysms.',
            },
            {
                title: 'Flow Diversion',
                description:
                    'Deployment of a high-density mesh stent (flow diverter) across the parent vessel neck. The flow diverter redirects blood flow, facilitating progressive thrombosis and reconstructing the parent arterial wall.',
            },
            {
                title: 'Parent Vessel Reconstruction',
                description:
                    'Custom endovascular remodeling of the parent vascular lumen in large or giant dysplastic aneurysms, ensuring critical side branches remain fully patent.',
            },
            {
                title: 'Complex Aneurysm Treatment',
                description:
                    'Multidisciplinary planning and customized combination therapy (coiling, stenting, and flow diversion) for challenging giant or fusiform cerebrovascular aneurysms.',
            },
        ],
        ctaQuestion: 'Do all brain aneurysms require immediate treatment?',
        ctaAnswer:
            'No. Small, unruptured aneurysms with low rupture risk parameters are often monitored safely with regular clinical imaging (MRA / CTA). A specialized consultation with an interventional neuroradiologist determines whether monitoring or intervention is the safest course of action.',
        ctaLabel: 'Aneurysm Evaluation FAQ',
        image: '/conditions/aneurysm.png',
        listingTitle: 'Brain Aneurysms',
        listingSubtitle: 'Ruptured & Unruptured Aneurysms',
        listingDescription:
            'Comprehensive evaluation and minimally invasive treatment of ruptured and unruptured aneurysms.',
        listingActionText: 'Explore Aneurysm Care',
        iconName: 'Brain',
    },
    {
        slug: 'stroke-intervention',
        type: 'condition',
        metaTitle: 'Stroke Intervention Specialist in Kochi | Dr. Soumya Ranjan Malla',
        metaDescription:
            'Emergency restoration of cerebral blood flow through mechanical thrombectomy for acute ischaemic stroke. Rapid clot extraction for large vessel occlusions in Kochi.',
        heroTitle: 'Acute Stroke Intervention in Kochi',
        heroCategory: 'Emergency Neurovascular Care',
        heroDescription:
            'Emergency restoration of cerebral blood flow through mechanical thrombectomy and advanced endovascular therapies.',
        overviewSectionLabel: 'Clinical Understanding',
        overviewHeading: 'What Is Acute Ischaemic Stroke?',
        overviewBody: [
            'Acute ischaemic stroke occurs when a blood clot suddenly blocks a major cerebral artery, cutting off oxygen supply to a portion of the brain. Every minute without blood flow causes irreversible death of approximately 1.9 million neurons.',
            'Large Vessel Occlusion (LVO) strokes — involving major arteries like the middle cerebral artery — carry the highest disability burden and are best treated with emergency mechanical thrombectomy within an extended time window of up to 24 hours from onset in selected patients.',
        ],
        overviewCardTitle: 'FAST Warning Signs',
        overviewCardIcon: 'AlertTriangle',
        evaluationCriteria: [
            {
                label: 'Face Drooping',
                desc: 'One side of the face droops or feels numb. Ask the person to smile — is the smile uneven?',
            },
            {
                label: 'Arm Weakness',
                desc: 'One arm is weak or numb. Ask the person to raise both arms — does one drift downward?',
            },
            {
                label: 'Speech Difficulty',
                desc: 'Speech is slurred or strange, or the person is unable to speak or be understood.',
            },
            {
                label: 'Time to Call',
                desc: 'If you observe ANY of the above signs, call emergency services immediately. Time is brain.',
            },
        ],
        treatmentSectionLabel: 'Emergency Endovascular Treatment',
        treatmentHeading: 'Stroke Treatment Options',
        treatmentSubheading:
            'Dr. Malla performs state-of-the-art interventional stroke procedures to restore cerebral blood flow and minimize permanent brain damage.',
        treatments: [
            {
                title: 'Mechanical Thrombectomy',
                description:
                    'The gold-standard emergency procedure: a microcatheter is guided to the blocked vessel to deploy a stent-retriever or aspiration catheter that physically removes the clot, restoring immediate blood flow.',
            },
            {
                title: 'IV Thrombolysis (tPA)',
                description:
                    'Intravenous clot-busting medication (tissue plasminogen activator) administered to dissolve the blood clot. Often used in combination with mechanical thrombectomy for optimal outcomes.',
            },
            {
                title: 'Intra-Arterial Thrombolysis',
                description:
                    'Direct delivery of thrombolytic agents through a microcatheter placed at the clot site for enhanced local dissolution in selected complex cases.',
            },
            {
                title: 'Cerebral Angioplasty & Stenting',
                description:
                    'For stroke caused by underlying intracranial arterial stenosis, balloon angioplasty and stent placement restore arterial diameter and prevent recurrent occlusion.',
            },
            {
                title: 'CT/MR Perfusion Guided Therapy',
                description:
                    'Advanced brain perfusion imaging is used to identify salvageable brain tissue (ischemic penumbra) and determine the optimal treatment window beyond 6 hours.',
            },
            {
                title: 'Post-Stroke Monitoring & Rehabilitation Referral',
                description:
                    'Comprehensive neuroradiological review of post-thrombectomy reperfusion and coordination with neurology and rehabilitation teams for optimal recovery outcomes.',
            },
        ],
        ctaQuestion: 'What should I do if I suspect a stroke?',
        ctaAnswer:
            'Act FAST. Call emergency services immediately. Do not drive the patient yourself — time is the most critical factor. The interventional neuroradiology team at Renai Medicity, Kochi is available 24×7 for emergency stroke treatment.',
        ctaLabel: 'Stroke Emergency FAQ',
        emergencyBanner: {
            title: 'EMERGENCY STROKE ALERT: 24×7 Emergency Neurovascular Helpline',
            description:
                'If you suspect someone is having an acute stroke (weakness, speech slurring, vision loss, or facial droop), seek medical attention immediately. Early endovascular treatment saves critical brain tissue.',
            ctaText: 'Call Emergency Helpline',
            ctaHref: 'tel:+919629997812',
            isWarningIcon: false,
        },
        relatedLinks: [
            { label: 'Mechanical Thrombectomy Procedure →', href: '/procedures/mechanical-thrombectomy' },
        ],
        image: '/conditions/stroke.png',
        listingTitle: 'Stroke Intervention',
        listingSubtitle: 'Acute Ischaemic Stroke',
        listingDescription:
            'Emergency restoration of cerebral blood flow through mechanical thrombectomy and advanced endovascular therapies.',
        listingActionText: 'View Treatment Details',
        iconName: 'ShieldAlert',
    },
    {
        slug: 'vascular-malformations',
        type: 'condition',
        metaTitle: 'Vascular Malformations (AVM, dAVF, CCF) Treatment | Dr. Soumya Ranjan Malla, Kochi',
        metaDescription:
            'Specialised endovascular embolisation of brain and spinal arteriovenous malformations (AVMs), dural arteriovenous fistulas (dAVFs), and carotid-cavernous fistulas in Kochi.',
        heroTitle: 'Vascular Malformation Specialist',
        heroCategory: 'Condition Overview',
        heroDescription:
            'Advanced embolisation strategies for cerebral and spinal AVMs, and endovascular treatment of cranial and spinal dAVFs and CCFs.',
        overviewSectionLabel: 'Clinical Understanding',
        overviewHeading: 'Understanding Vascular Malformations',
        overviewBody: [
            'Vascular malformations are abnormal tangles or connections between arteries and veins in the brain, spine, or dura mater. These include Arteriovenous Malformations (AVMs), Dural Arteriovenous Fistulas (dAVFs), and Carotid-Cavernous Fistulas (CCFs).',
            'If left untreated, these high-flow lesions carry a cumulative risk of haemorrhage, progressive neurological deficits, pulsatile tinnitus, visual loss, and venous hypertension. Endovascular embolisation has revolutionized their treatment, offering minimally invasive occlusion without open surgery in many cases.',
        ],
        overviewCardTitle: 'Types We Treat',
        overviewCardIcon: 'HeartPulse',
        evaluationCriteria: [
            {
                label: 'Arteriovenous Malformations (AVMs)',
                desc: 'Advanced embolisation strategies for cerebral and spinal AVMs.',
            },
            {
                label: 'Dural Arteriovenous Fistulas (dAVFs)',
                desc: 'Diagnosis and treatment of cranial and spinal vascular fistulas.',
            },
            {
                label: 'Carotid-Cavernous Fistulas',
                desc: 'Endovascular treatment of traumatic and spontaneous fistulas.',
            },
        ],
        treatmentSectionLabel: 'Endovascular Embolisation',
        treatmentHeading: 'Targeted Vascular Occlusion',
        treatmentSubheading:
            'Using liquid embolic agents, microcoils, and advanced catheter techniques, Dr. Malla precisely occludes abnormal vascular connections to eliminate haemorrhage risk.',
        treatments: [
            {
                title: 'Liquid Embolic Embolisation',
                description:
                    'ONYX or n-BCA liquid embolic agents injected under fluoroscopic guidance through a microcatheter to permanently fill and occlude the AVM nidus or fistula channel.',
            },
            {
                title: 'Microcoil Occlusion',
                description:
                    'Deployment of platinum detachable microcoils to occlude feeding vessels, fistula points, or draining venous pouches in high-flow CCFs and dAVFs.',
            },
            {
                title: 'Transarterial Embolisation',
                description:
                    'Arterial approach catheterisation to the AVM nidus or fistula for targeted occlusion while preserving normal cerebral arterial territories.',
            },
            {
                title: 'Transvenous Embolisation',
                description:
                    'Venous route approach particularly used for CCFs and dAVFs, packing the cavernous sinus or fistula point via venous access for direct closure.',
            },
            {
                title: 'Pre-Surgical Embolisation',
                description:
                    'Staged embolisation sessions to reduce AVM blood flow and nidus volume prior to neurosurgical resection or radiosurgery, reducing operative risk.',
            },
            {
                title: 'Combined Multidisciplinary Treatment',
                description:
                    'Complex AVMs may require combination of endovascular embolisation, microsurgical resection, and stereotactic radiosurgery planned in a multidisciplinary team approach.',
            },
        ],
        ctaQuestion: 'Can vascular malformations be completely cured?',
        ctaAnswer:
            'Many dAVFs and CCFs can be completely cured with endovascular embolisation alone. AVMs may require staged treatment or a combination of modalities. The goal is complete obliteration of the abnormal vascular connection to eliminate haemorrhage risk.',
        ctaLabel: 'Vascular Malformation FAQ',
        image: '/conditions/avm.png',
        listingTitle: 'Vascular Malformations',
        listingSubtitle: 'AVMs, dAVFs, & CCFs',
        listingDescription:
            'Advanced embolisation strategies for cerebral and spinal AVMs, and endovascular treatment of cranial and spinal dAVFs and CCFs.',
        listingActionText: 'Learn About Malformations',
        iconName: 'HeartPulse',
    },
    {
        slug: 'carotid-artery-disease',
        type: 'condition',
        metaTitle: 'Carotid Artery Disease & Stenting | Dr. Soumya Ranjan Malla, Kochi',
        metaDescription:
            'Stroke prevention through minimally invasive carotid artery stenting (CAS) and cerebral protection filters. Expert endovascular management of carotid stenosis in Kochi.',
        heroTitle: 'Carotid Artery Disease Specialist',
        heroCategory: 'Stroke Prevention',
        heroDescription:
            'Stroke prevention through carotid artery stenting and cerebrovascular revascularisation.',
        overviewSectionLabel: 'Clinical Understanding',
        overviewHeading: 'Understanding Carotid Artery Disease',
        overviewBody: [
            'Carotid artery disease involves the progressive narrowing (stenosis) of the carotid arteries — the main vessels supplying blood to the brain — due to atherosclerotic plaque build-up. Significant stenosis dramatically increases the risk of ischaemic stroke from thromboembolism.',
            'Carotid artery stenting (CAS) is a minimally invasive endovascular technique that widens the narrowed artery and stabilises plaque using a self-expanding stent, reducing stroke risk without the need for open neck surgery (carotid endarterectomy).',
        ],
        overviewCardTitle: 'Conditions Evaluated',
        overviewCardIcon: 'Activity',
        evaluationCriteria: [
            {
                label: 'Carotid Artery Disease',
                desc: 'Stroke prevention through carotid artery stenting and cerebrovascular revascularisation.',
            },
            {
                label: 'Intracranial Atherosclerotic Disease',
                desc: 'Endovascular management of symptomatic intracranial stenosis.',
            },
        ],
        treatmentSectionLabel: 'Endovascular Treatment',
        treatmentHeading: 'Carotid Artery Interventions',
        treatmentSubheading:
            'Dr. Malla performs minimally invasive endovascular interventions to restore carotid arterial flow and prevent stroke.',
        treatments: [
            {
                title: 'Carotid Artery Stenting (CAS)',
                description:
                    'A self-expanding stent is deployed across the narrowed carotid artery segment to widen the lumen, stabilise plaque, and restore normal cerebral blood flow.',
            },
            {
                title: 'Embolic Protection Filter',
                description:
                    'A distal protection device (filter wire) is deployed beyond the stenosis during stenting to capture any dislodged plaque fragments, preventing their embolization to the brain.',
            },
            {
                title: 'Balloon Angioplasty',
                description:
                    'Pre-dilation of the stenotic segment with a catheter-mounted balloon to facilitate stent delivery in severely calcified or rigid lesions.',
            },
            {
                title: 'Carotid Post-Dilation',
                description:
                    'Careful balloon inflation within the deployed stent to ensure full stent expansion and optimal arterial wall apposition after CAS.',
            },
            {
                title: 'Intracranial Stenting',
                description:
                    'For stroke caused by intracranial arterial stenosis (rather than extracranial carotid disease), dedicated intracranial stenting with embolic protection restores flow.',
            },
            {
                title: 'Dual Antiplatelet Optimization',
                description:
                    'Post-CAS pharmacological management with dual antiplatelet agents to prevent in-stent thrombosis and recurrent stroke during the critical endothelialisation period.',
            },
        ],
        ctaQuestion: 'Is carotid stenting safer than surgery for all patients?',
        ctaAnswer:
            'Carotid artery stenting is the preferred approach for patients who are high surgical risk, have difficult anatomy, or prior radiation to the neck. For standard-risk patients, outcomes of CAS and carotid endarterectomy are comparable. Dr. Malla will determine the most appropriate strategy based on your imaging and clinical profile.',
        ctaLabel: 'Carotid Disease FAQ',
        relatedLinks: [
            { label: 'Cerebrovascular Revascularisation Procedure →', href: '/procedures/cerebrovascular-revascularisation' },
        ],
        image: '/conditions/carotid.png',
        listingTitle: 'Carotid Artery Disease',
        listingSubtitle: 'Carotid Stenosis & Plaque Management',
        listingDescription:
            'Stroke prevention through carotid artery stenting and cerebrovascular revascularisation.',
        listingActionText: 'Stroke Prevention',
        iconName: 'Activity',
    },
    {
        slug: 'spinal-vascular-disorders',
        type: 'condition',
        metaTitle: 'Spinal Vascular Disorders (AVM & dAVF) | Dr. Soumya Ranjan Malla, Kochi',
        metaDescription:
            'Advanced diagnostic angiography and endovascular occlusion of spinal dural AVFs and spinal AVMs causing myelopathy. Expert care in Kochi, Kerala.',
        heroTitle: 'Spinal Vascular Disorder Specialist',
        heroCategory: 'Spinal Neurovascular Care',
        heroDescription:
            'Treatment of spinal dAVFs, spinal AVMs and other vascular pathologies affecting the spinal cord.',
        overviewSectionLabel: 'Clinical Understanding',
        overviewHeading: 'Understanding Spinal Vascular Disorders',
        overviewBody: [
            'Spinal vascular malformations — including spinal dural arteriovenous fistulas (dAVFs) and spinal AVMs — are abnormal vascular connections within or around the spinal cord that cause progressive venous hypertension and spinal cord ischaemia.',
            'These conditions are frequently misdiagnosed as inflammatory or degenerative spinal disease. Early detection via spinal angiography and timely endovascular treatment can halt and even partially reverse the progressive neurological deficit (myelopathy).',
        ],
        overviewCardTitle: 'Key Clinical Features',
        overviewCardIcon: 'Zap',
        evaluationCriteria: [
            {
                label: 'Progressive Myelopathy',
                desc: 'Stepwise or steadily progressive leg weakness, sensory loss, and bladder/bowel dysfunction — often misattributed to disc disease.',
            },
            {
                label: 'MRI Signal Changes',
                desc: 'T2 signal cord oedema with prominent perimedullary flow voids on MRI are highly suspicious for a spinal vascular malformation.',
            },
            {
                label: 'Spinal Angiography',
                desc: 'The definitive diagnostic test — a selective catheterisation of spinal segmental arteries to map the exact fistula point and its venous drainage.',
            },
        ],
        treatmentSectionLabel: 'Endovascular Treatment',
        treatmentHeading: 'Spinal Vascular Interventions',
        treatmentSubheading:
            'Precise endovascular techniques targeting the spinal fistula or AVM to eliminate pathological venous hypertension and halt neurological decline.',
        treatments: [
            {
                title: 'Spinal dAVF Embolisation',
                description:
                    'ONYX or n-BCA liquid embolic injection through a microcatheter positioned at the fistula point to permanently occlude the arteriovenous shunt.',
            },
            {
                title: 'Transarterial Spinal AVM Embolisation',
                description:
                    'Staged endovascular embolisation of spinal AVM feeding vessels to reduce nidus volume, reduce haemorrhage risk, and facilitate safer surgical resection if needed.',
            },
            {
                title: 'Selective Spinal Angiography',
                description:
                    'Comprehensive diagnostic mapping of intercostal and lumbar arteries to precisely locate the spinal fistula or AVM nidus prior to definitive treatment.',
            },
            {
                title: 'Pre-Surgical Embolisation',
                description:
                    'Reduction of spinal AVM blood flow immediately before microsurgical resection, minimising intraoperative haemorrhage and improving surgical exposure.',
            },
            {
                title: 'Post-Treatment Surveillance',
                description:
                    'Follow-up MRI and selective angiography after embolisation to confirm occlusion and monitor for any recanalization of the treated lesion.',
            },
            {
                title: 'Multidisciplinary Spine MDT',
                description:
                    'Complex spinal vascular lesions are managed collaboratively with spine surgeons and neurologists for optimal surgical and rehabilitation planning.',
            },
        ],
        ctaQuestion: 'Can spinal vascular fistulas be treated without surgery?',
        ctaAnswer:
            'Yes, in many cases. Spinal dural AVFs (the most common type) are often curable with endovascular embolisation alone when the fistula anatomy is favourable. Early treatment before significant cord injury occurs gives the best chance of neurological recovery.',
        ctaLabel: 'Spinal Vascular FAQ',
        image: '/conditions/spinal.png',
        listingTitle: 'Spinal Vascular Disorders',
        listingSubtitle: 'Spinal AVMs & Fistulas',
        listingDescription:
            'Treatment of spinal dAVFs, spinal AVMs and other vascular pathologies affecting the spinal cord.',
        listingActionText: 'Spinal Angiography',
        iconName: 'Zap',
    },
    {
        slug: 'other-conditions',
        type: 'condition',
        metaTitle: 'Specialised Neurovascular Conditions | Dr. Soumya Ranjan Malla, Kochi',
        metaDescription:
            'Evaluation and treatment of pulsatile tinnitus, idiopathic intracranial hypertension (IIH), MMA embolisation for chronic subdural haematoma, and unexplained brain haemorrhage in Kochi.',
        heroTitle: 'Specialised Neurovascular Care',
        heroCategory: 'Other Conditions',
        heroDescription:
            'Comprehensive evaluation and treatment for pulsatile tinnitus, unexplained brain haemorrhage, idiopathic intracranial hypertension, spontaneous intracranial hypotension, and chronic subdural haematoma.',
        overviewSectionLabel: 'Clinical Understanding',
        overviewHeading: 'Specialised Neurovascular Conditions',
        overviewBody: [
            'Beyond stroke and aneurysms, there is a spectrum of specialised neurovascular conditions that require the precision diagnostics and interventional expertise of a dedicated interventional neuroradiologist.',
            'These include conditions like pulsatile tinnitus (often caused by an underlying dural AVF or jugular bulb anomaly), idiopathic intracranial hypertension (IIH) managed with venous sinus stenting, and Middle Meningeal Artery (MMA) embolisation for chronic subdural haematoma.',
        ],
        overviewCardTitle: 'Conditions We Evaluate',
        overviewCardIcon: 'HelpCircle',
        evaluationCriteria: [
            {
                label: 'Pulsatile Tinnitus',
                desc: 'Comprehensive neurovascular evaluation for vascular causes of tinnitus.',
            },
            {
                label: 'Unexplained Brain Haemorrhage',
                desc: 'Advanced angiographic assessment for occult cerebrovascular pathology.',
            },
            {
                label: 'Idiopathic Intracranial Hypertension',
                desc: 'Evaluation and venous sinus intervention when indicated.',
            },
            {
                label: 'Spontaneous Intracranial Hypotension',
                desc: 'Diagnosis and image-guided treatment strategies.',
            },
            {
                label: 'Chronic Subdural Haematoma',
                desc: 'MMA embolisation and multidisciplinary management.',
            },
        ],
        treatmentSectionLabel: 'Specialised Interventions',
        treatmentHeading: 'Targeted Endovascular Solutions',
        treatmentSubheading:
            'A range of minimally invasive procedures tailored to the specific underlying vascular pathology identified through advanced imaging.',
        treatments: [
            {
                title: 'MMA Embolisation',
                description:
                    'Selective catheterisation and embolisation of the middle meningeal artery to eliminate blood supply to the chronic subdural haematoma membrane, allowing gradual reabsorption without surgery.',
            },
            {
                title: 'Dural Venous Sinus Stenting for IIH',
                description:
                    'Stenting of a stenotic dural venous sinus to restore normal CSF outflow, reducing intracranial pressure and relieving papilloedema-related visual loss in IIH patients.',
            },
            {
                title: 'Pulsatile Tinnitus Workup & Treatment',
                description:
                    'Selective cerebral and cervical angiography to identify the underlying vascular cause of pulsatile tinnitus, followed by targeted endovascular occlusion if a dural fistula or diverticulum is found.',
            },
            {
                title: 'Cerebral Angiography for Unexplained Haemorrhage',
                description:
                    'High-resolution digital subtraction angiography (DSA) to systematically evaluate all cerebral vessels for occult vascular malformations or aneurysms in patients with unexplained intracranial haemorrhage.',
            },
            {
                title: 'Head & Neck Vascular Interventions',
                description:
                    'Endovascular management of head and neck vascular tumours (paragangliomas, meningiomas) with pre-surgical embolisation to reduce operative blood loss.',
            },
            {
                title: 'Epistaxis (Nosebleed) Embolisation',
                description:
                    'Selective embolisation of sphenopalatine or internal maxillary artery branches for intractable posterior epistaxis unresponsive to conventional ENT interventions.',
            },
        ],
        ctaQuestion: 'What is MMA embolisation and who is it for?',
        ctaAnswer:
            'Middle Meningeal Artery (MMA) embolisation is a minimally invasive procedure for chronic subdural haematoma (SDH) — a blood collection on the brain surface, common in elderly patients or those on blood thinners. Instead of burr-hole surgery, a catheter is used to block the artery feeding the SDH membrane, allowing it to gradually resolve. It is ideal for patients unfit for surgery or with recurrent SDH.',
        ctaLabel: 'Specialised Conditions FAQ',
        image: '/conditions/venous.png',
        listingTitle: 'Other Conditions',
        listingSubtitle: 'Specialised Neurovascular Care',
        listingDescription:
            'Comprehensive evaluation and treatment for pulsatile tinnitus, unexplained brain haemorrhage, idiopathic intracranial hypertension, spontaneous intracranial hypotension, and chronic subdural haematoma.',
        listingActionText: 'View Diagnostics',
        iconName: 'HelpCircle',
    },
];

// ─── Procedures ───────────────────────────────────────────────────────────────

export const procedures: ProcedureData[] = [
    {
        slug: 'mechanical-thrombectomy',
        type: 'procedure',
        metaTitle: 'Mechanical Thrombectomy Specialist in Kochi | Dr. Soumya Ranjan Malla',
        metaDescription:
            'Emergency clot retrieval for acute ischaemic stroke using advanced endovascular aspiration and stent-retriever devices. Available 24/7 at Renai Medicity, Kochi.',
        heroTitle: 'Mechanical Thrombectomy',
        heroCategory: 'Specialised Intervention',
        heroDescription:
            'Rapid clot retrieval for acute ischaemic stroke using aspiration and stent-retriever techniques.',
        overviewSectionLabel: 'Emergency Endovascular Treatment',
        overviewHeading: 'Restoration of Cerebral Blood Flow',
        overviewBody: [
            'Mechanical thrombectomy is a state-of-the-art, minimally invasive procedure performed inside a catheterization laboratory (cath lab) to treat acute ischaemic strokes. During the procedure, the interventional neuroradiologist navigates a microcatheter from the groin or wrist artery directly to the blocked vessel in the brain using real-time X-ray guidance.',
            'Once positioned, a stent-retriever (a tiny wire mesh cage) or a large-bore aspiration catheter is deployed to trap and remove the blood clot. This immediately restores blood flow to the oxygen-starved brain tissue, maximizing the chances of complete recovery.',
        ],
        technicalApproaches: [
            'Stent-Retriever Clot Capture',
            'Direct Aspiration (ADAPT technique)',
            'Combined Solumbra Method',
            'Microcatheter Arterial Reconstruction',
        ],
        infoCardIcon: 'Clock',
        infoCardAccentColor: 'red',
        infoCardLabel: 'Time-Critical Intervention',
        infoCardTitle: 'Stroke: Every Minute Matters',
        infoCardBody:
            'During an acute stroke, approximately 1.9 million brain cells die every minute blood flow is blocked. Restoring perfusion immediately saves brain tissues and prevents long-term disability.',
        infoCardHighlight:
            'Mechanical thrombectomy is recommended up to 24 hours from stroke onset in selected patients with Large Vessel Occlusion.',
        indicationsSectionLabel: 'Clinical Indications',
        indicationsHeading: 'When is Mechanical Thrombectomy Used?',
        indicationsBody: [
            'The procedure is primarily indicated for patients diagnosed with an Acute Ischaemic Stroke secondary to a Large Vessel Occlusion (LVO) in the anterior or posterior cerebral circulation.',
            'Candidates undergo emergency brain imaging (CT Perfusion or MR Perfusion) to identify salvageable brain tissues (ischemic penumbra) prior to immediate catheterization. It can be performed alongside or after intravenous thrombolysis (tPA clot buster).',
        ],
        relatedLinks: [
            { label: 'Acute Ischaemic Stroke →', href: '/conditions/stroke-intervention' },
        ],
        emergencyBanner: {
            title: 'EMERGENCY STROKE ALERT: 24×7 Emergency Neurovascular Helpline',
            description:
                'If you suspect someone is having an acute stroke (weakness, speech slurring, vision loss, or facial droop), seek medical attention immediately. Early endovascular treatment saves critical brain tissue.',
            ctaText: 'Call Emergency Helpline',
            ctaHref: 'tel:+919629997812',
            isWarningIcon: false,
        },
        listingTitle: 'Mechanical Thrombectomy',
        listingDescription:
            'Rapid clot retrieval for acute ischaemic stroke using aspiration and stent-retriever techniques.',
        listingDetails: [
            'Stent-Retriever Extraction',
            'Direct Aspiration Techniques',
            'Emergency Large Vessel Occlusion Treatment',
            '24/7 Stroke Interventions Coordination',
        ],
        listingActionText: 'View Emergency Procedure',
        iconName: 'ShieldAlert',
        image: '/conditions/stroke.png',
    },
    {
        slug: 'brain-aneurysm-treatment',
        type: 'procedure',
        metaTitle: 'Brain Aneurysm Endovascular Treatment | Dr. Soumya Ranjan Malla, Kochi',
        metaDescription:
            'Advanced endovascular coiling, flow diversion, and stent-assisted techniques to treat ruptured and unruptured brain aneurysms. Expert minimally invasive care in Kochi.',
        heroTitle: 'Brain Aneurysm Treatment',
        heroCategory: 'Endovascular Procedure',
        heroDescription:
            'Advanced endovascular techniques to permanently seal ruptured and unruptured brain aneurysms from the circulation without open cranial surgery.',
        overviewSectionLabel: 'Endovascular Technique',
        overviewHeading: 'Securing Aneurysms from Within',
        overviewBody: [
            'Endovascular aneurysm treatment involves navigating a microcatheter through blood vessels (entering from the groin or wrist) under X-ray guidance to reach the aneurysm inside the brain. Once there, the interventionalist deploys coils, stents, or flow-diversion devices to seal off the aneurysm from the circulation.',
            'This approach is minimally invasive — no skull opening is required. It is suitable for both ruptured aneurysms requiring emergency treatment and unruptured aneurysms managed electively. The choice of technique depends on aneurysm size, shape, neck width, and patient clinical status.',
        ],
        technicalApproaches: [
            'Simple Coiling',
            'Balloon-Assisted Coiling',
            'Stent-Assisted Coiling',
            'Flow Diversion',
            'Parent Vessel Reconstruction',
            'Complex Aneurysm Treatment',
        ],
        infoCardIcon: 'Cpu',
        infoCardAccentColor: 'teal',
        infoCardLabel: 'Minimally Invasive',
        infoCardTitle: 'No Skull Opening Required',
        infoCardBody:
            'Endovascular techniques allow the entire procedure to be performed through a small catheter inserted in the groin or wrist artery — eliminating the risks associated with open craniotomy surgery.',
        infoCardHighlight:
            'Over 85% of brain aneurysms can now be treated endovascularly, with excellent long-term occlusion rates and lower post-procedure recovery times.',
        indicationsSectionLabel: 'Clinical Indications',
        indicationsHeading: 'When Is Aneurysm Treatment Needed?',
        indicationsBody: [
            'Ruptured aneurysms require immediate emergency treatment to prevent re-bleeding. Unruptured aneurysms are treated based on size, location, morphology, and patient risk profile, with the goal of preventing future rupture.',
            'Dr. Malla individualises the treatment approach — whether coiling, flow diversion, or observation with surveillance imaging — based on a thorough aneurysm morphology assessment and shared decision-making with the patient.',
        ],
        relatedLinks: [
            { label: 'Brain Aneurysms Condition →', href: '/conditions/brain-aneurysms' },
        ],
        ctaQuestion: 'What happens after aneurysm coiling?',
        ctaAnswer:
            'After successful coiling, patients typically stay in hospital for 2–4 days. Follow-up MR angiography (MRA) is performed at 6 months and then annually to confirm stable aneurysm occlusion. Most patients return to normal activities within 1–2 weeks.',
        ctaLabel: 'Post-Procedure FAQ',
        listingTitle: 'Brain Aneurysm Treatment',
        listingDescription:
            'Advanced endovascular techniques to prevent aneurysm rupture by sealing the weak arterial bulge from the circulation.',
        listingDetails: [
            'Simple Coiling',
            'Balloon & Stent-Assisted Coiling',
            'Flow Diversion',
            'Parent Vessel Reconstruction',
        ],
        listingActionText: 'View Treatment Scopes',
        iconName: 'Cpu',
        image: '/conditions/aneurysm.png',
    },
    {
        slug: 'avm-davf-embolisation',
        type: 'procedure',
        metaTitle: 'AVM & dAVF Embolisation | Dr. Soumya Ranjan Malla, Kochi',
        metaDescription:
            'Targeted vascular occlusion using liquid embolic agents and microcoils for brain and spinal AVMs, dural AVFs, and carotid-cavernous fistulas. Minimally invasive expert care in Kochi.',
        heroTitle: 'AVM & dAVF Embolisation',
        heroCategory: 'Endovascular Embolisation',
        heroDescription:
            'Targeted vascular occlusion using liquid embolic agents or microcoils to secure high-flow brain and spinal malformations.',
        overviewSectionLabel: 'Procedure Overview',
        overviewHeading: 'Targeted Closure of Abnormal Vessels',
        overviewBody: [
            'Endovascular embolisation of AVMs and dAVFs involves navigating a microcatheter through arterial or venous routes to reach the abnormal vascular connection, then injecting liquid embolic agents (ONYX, n-BCA) or deploying microcoils to permanently occlude the lesion.',
            'The procedure is performed under biplane fluoroscopic guidance with high-resolution digital subtraction angiography (DSA). It may be performed as a standalone curative treatment or as part of a staged multi-modality approach combined with surgery or radiosurgery.',
        ],
        technicalApproaches: [
            'Cerebral AVM Embolisation',
            'Cranial dAVF Embolisation',
            'Carotid-Cavernous Fistula Embolisation',
            'Spinal dAVF Embolisation',
            'Head & Neck Vascular Malformation Embolisation',
            'Pre-operative Embolisation',
        ],
        infoCardIcon: 'HeartPulse',
        infoCardAccentColor: 'teal',
        infoCardLabel: 'Precision Vascular Occlusion',
        infoCardTitle: 'Eliminating Haemorrhage Risk',
        infoCardBody:
            'The goal of embolisation is to eliminate the abnormal arteriovenous shunt and reduce venous hypertension, thereby removing the risk of catastrophic haemorrhage from the malformation.',
        infoCardHighlight:
            'Many dAVFs and CCFs can be completely cured in a single embolisation session. Cerebral AVMs may require staged sessions for complete obliteration.',
        indicationsSectionLabel: 'Clinical Indications',
        indicationsHeading: 'When Is Embolisation Used?',
        indicationsBody: [
            'Embolisation is indicated for symptomatic AVMs with haemorrhage risk or neurological deficit, all dAVFs with cortical venous drainage (high-grade), and CCFs causing orbital congestion or visual loss.',
            'Pre-surgical embolisation reduces AVM nidus volume and blood flow before microsurgical resection. Pre-radiosurgical embolisation targets high-flow components to improve radiosurgery efficacy.',
        ],
        relatedLinks: [
            { label: 'Vascular Malformations Condition →', href: '/conditions/vascular-malformations' },
        ],
        listingTitle: 'AVM & dAVF Embolisation',
        listingDescription:
            'Targeted vascular occlusion using liquid embolic agents or microcoils to secure high-flow brain and spinal malformations.',
        listingDetails: [
            'Cerebral & Cranial AVM Embolisation',
            'Cranial & Spinal dAVF Embolisation',
            'Carotid-Cavernous Fistula Embolisation',
            'Pre-operative Embolisation',
        ],
        listingActionText: 'Explore Embolisation',
        iconName: 'HeartPulse',
        image: '/conditions/avm.png',
    },
    {
        slug: 'cerebrovascular-revascularisation',
        type: 'procedure',
        metaTitle: 'Carotid Stenting & Cerebrovascular Revascularisation | Dr. Soumya Ranjan Malla, Kochi',
        metaDescription:
            'Minimally invasive carotid artery stenting, intracranial balloon angioplasty, and stenting for stroke prevention in patients with cerebrovascular stenosis. Expert care in Kochi.',
        heroTitle: 'Cerebrovascular Revascularisation',
        heroCategory: 'Stroke Prevention Procedure',
        heroDescription:
            'Restoring arterial diameter and blood flow to restrict stroke recurrence risks in chronic stenotic arterial disease.',
        overviewSectionLabel: 'Procedure Overview',
        overviewHeading: 'Opening Narrowed Cerebral Arteries',
        overviewBody: [
            'Cerebrovascular revascularisation procedures are designed to restore adequate blood flow through stenotic (narrowed) cerebral and cervical arteries caused by atherosclerotic plaque build-up. Narrowing of the carotid arteries or intracranial vessels is a major cause of ischaemic stroke and TIA.',
            'Endovascular revascularisation — including carotid artery stenting (CAS) and intracranial balloon angioplasty — offers a minimally invasive alternative to open surgical endarterectomy, with equivalent safety and efficacy in appropriately selected patients.',
        ],
        technicalApproaches: [
            'Carotid Artery Stenting',
            'Intracranial Angioplasty',
            'Intracranial Stenting',
            'Cerebral Perfusion Assessment',
            'Stroke Prevention Consultation',
        ],
        infoCardIcon: 'Activity',
        infoCardAccentColor: 'teal',
        infoCardLabel: 'Stroke Prevention',
        infoCardTitle: 'Preventing Stroke Recurrence',
        infoCardBody:
            'Significant carotid stenosis (>70%) carries an annual stroke risk of up to 13% without treatment. Carotid artery stenting reduces this risk to below 2% per year when combined with antiplatelet therapy.',
        infoCardHighlight:
            'Carotid stenting can be performed under local anaesthesia with conscious sedation, typically as a day-case or single-overnight-stay procedure.',
        indicationsSectionLabel: 'Clinical Indications',
        indicationsHeading: 'Who Needs Revascularisation?',
        indicationsBody: [
            'Revascularisation is indicated in symptomatic carotid stenosis (>50%) where a TIA or stroke has already occurred, and in asymptomatic high-grade stenosis (>70–80%) with imaging features suggesting unstable plaque.',
            'Intracranial angioplasty and stenting is reserved for patients with recurrent stroke despite optimal medical therapy due to severe intracranial arterial stenosis in accessible vessels.',
        ],
        relatedLinks: [
            { label: 'Carotid Artery Disease Condition →', href: '/conditions/carotid-artery-disease' },
        ],
        ctaQuestion: 'How long does carotid stenting take?',
        ctaAnswer:
            'Carotid artery stenting is typically performed under local anaesthesia and takes approximately 45–90 minutes. Most patients are discharged the next day and can return to normal activities within one week.',
        ctaLabel: 'Revascularisation FAQ',
        listingTitle: 'Cerebrovascular Revascularisation',
        listingDescription:
            'Restoring arterial diameter and blood flow to restrict stroke recurrence risks in chronic stenotic arterial disease.',
        listingDetails: [
            'Carotid Artery Stenting',
            'Intracranial Angioplasty & Stenting',
            'Cerebral Perfusion Assessment',
            'Stroke Prevention Consultation',
        ],
        listingActionText: 'Stroke Prevention Care',
        iconName: 'Activity',
        image: '/conditions/carotid.png',
    },
    {
        slug: 'diagnostic-neurovascular-imaging',
        type: 'procedure',
        metaTitle: 'Diagnostic Neurovascular Imaging & Cerebral Angiography | Dr. Soumya Ranjan Malla, Kochi',
        metaDescription:
            'High-resolution cerebral DSA, spinal angiography, CT/MR angiography, and brain perfusion analysis for neurovascular conditions. Expert diagnostic imaging in Kochi.',
        heroTitle: 'Diagnostic Neurovascular Imaging',
        heroCategory: 'Diagnostic Procedure',
        heroDescription:
            'High-resolution vascular mapping to identify cerebral, cranial, and spinal circulatory conditions with precision diagnostic angiography.',
        overviewSectionLabel: 'Procedure Overview',
        overviewHeading: 'Precision Neurovascular Diagnostics',
        overviewBody: [
            'Diagnostic neurovascular imaging is the cornerstone of interventional neuroradiology. Accurate identification of the underlying vascular anatomy and pathology is essential before any treatment decision is made.',
            'Dr. Malla performs comprehensive cerebral digital subtraction angiography (DSA) — the gold standard diagnostic tool — along with advanced CT/MR angiography review and brain perfusion analysis to map cerebrovascular conditions with maximum precision.',
        ],
        technicalApproaches: [
            'Cerebral Angiography',
            'Spinal Angiography',
            'CT Angiography',
            'MR Angiography',
            'Vessel Wall Imaging',
            'Perfusion Imaging',
            'Advanced MRI Interpretation',
        ],
        infoCardIcon: 'Monitor',
        infoCardAccentColor: 'teal',
        infoCardLabel: 'Gold Standard Imaging',
        infoCardTitle: 'Why DSA Is Still the Gold Standard',
        infoCardBody:
            'Digital Subtraction Angiography (DSA) provides the highest spatial and temporal resolution of cerebral blood vessels. It can detect micro-aneurysms, minute AVMs, and subtle fistulas invisible on CT or MR angiography.',
        infoCardHighlight:
            'Modern biplane DSA systems allow full 3D rotational angiography and volumetric reconstructions of the cerebral vasculature for superior anatomical understanding.',
        indicationsSectionLabel: 'When Is It Needed?',
        indicationsHeading: 'Indications for Cerebral Angiography',
        indicationsBody: [
            'Cerebral DSA is indicated for suspected or confirmed aneurysms, AVMs, dAVFs, vasculitis, unexplained haemorrhage, and stroke workup when non-invasive imaging is inconclusive.',
            'Spinal angiography is the definitive test for suspected spinal dAVFs causing progressive myelopathy, and for pre-operative mapping of spinal AVMs. CT and MR angiography serve as screening tools and are reviewed alongside DSA findings.',
        ],
        relatedLinks: [
            { label: 'Brain Aneurysms →', href: '/conditions/brain-aneurysms' },
            { label: 'Vascular Malformations →', href: '/conditions/vascular-malformations' },
            { label: 'Spinal Vascular Disorders →', href: '/conditions/spinal-vascular-disorders' },
        ],
        ctaQuestion: 'Is cerebral angiography (DSA) painful or dangerous?',
        ctaAnswer:
            'Cerebral DSA is performed under local anaesthesia with sedation and is generally well tolerated. The risk of a serious neurological complication is approximately 0.5–1% in experienced centres. Dr. Malla performs these procedures routinely, ensuring the highest safety standards. The procedure typically takes 45–60 minutes and most patients are discharged the same day or next morning.',
        ctaLabel: 'Diagnostic Imaging FAQ',
        listingTitle: 'Diagnostic Neurovascular Imaging',
        listingDescription:
            'High-resolution vascular mapping to identify cerebral, cranial, and spinal circulatory conditions.',
        listingDetails: [
            'Cerebral & Spinal Angiography',
            'CT & MR Angiography',
            'Vessel Wall & Perfusion Imaging',
            'Advanced MRI Interpretation',
        ],
        listingActionText: 'Explore Imaging Reviews',
        iconName: 'Monitor',
        image: '/conditions/venous.png',
    },
];

// ─── Lookup helpers ────────────────────────────────────────────────────────────

export function getConditionBySlug(slug: string): ConditionData | undefined {
    return conditions.find((c) => c.slug === slug);
}

export function getProcedureBySlug(slug: string): ProcedureData | undefined {
    return procedures.find((p) => p.slug === slug);
}
