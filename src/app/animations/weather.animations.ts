import { trigger, state, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

export const fadeInUp = trigger('fadeInUp', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
    ])
]);

export const fadeInScale = trigger('fadeInScale', [
    transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
    ])
]);

export const slideInLeft = trigger('slideInLeft', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-50px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
    ])
]);

export const slideInRight = trigger('slideInRight', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateX(50px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
    ])
]);

export const staggerAnimation = trigger('stagger', [
    transition(':enter', [
        query('*', [
            style({ opacity: 0, transform: 'translateY(20px)' }),
            stagger(100, [
                animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
            ])
        ], { optional: true })
    ])
]);

export const containerAnimation = trigger('containerAnimation', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 }))
    ])
]);

export const pulseAnimation = trigger('pulseAnimation', [
    state('normal', style({ transform: 'scale(1)' })),
    state('pulsed', style({ transform: 'scale(1.05)' })),
    transition('normal <=> pulsed', animate('300ms ease-in-out'))
]);

export const weatherCardAnimation = trigger('weatherCard', [
    transition(':enter', [
        animate('800ms ease-out', keyframes([
            style({ opacity: 0, transform: 'translateY(50px) scale(0.9)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateY(20px) scale(0.95)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0) scale(1)', offset: 1 })
        ]))
    ])
]);

export const loadingSpinner = trigger('loadingSpinner', [
    transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.5)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
    ]),
    transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'scale(0.5)' }))
    ])
]);

export const searchAnimation = trigger('searchAnimation', [
    state('idle', style({ transform: 'scale(1)' })),
    state('searching', style({ transform: 'scale(1.02)' })),
    transition('idle <=> searching', animate('200ms ease-in-out'))
]);